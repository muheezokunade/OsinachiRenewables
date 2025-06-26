import type { Express } from 'express';
import { createServer, type Server } from 'http';
import { storage } from './storage';
import { insertContactSubmissionSchema } from '@shared/schema';
import { z } from 'zod';
import express from 'express';
import path from 'path';
import { generateSitemapXML, robotsTxt } from '../client/src/utils/sitemap';
import validator from 'validator';

const router = express.Router();

// Input sanitization middleware
const sanitizeInput = (req: any, res: any, next: any) => {
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = validator.escape(req.body[key].trim());
      }
    });
  }
  next();
};

// Authentication middleware for admin endpoints
const authenticateAdmin = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required',
    });
  }

  const token = authHeader.substring(7);
  const expectedToken = process.env.ADMIN_TOKEN;

  if (!expectedToken) {
    return res.status(500).json({
      success: false,
      message: 'Server configuration error',
    });
  }

  if (token !== expectedToken) {
    return res.status(401).json({
      success: false,
      message: 'Invalid authentication token',
    });
  }

  next();
};

// Serve sitemap.xml
router.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(generateSitemapXML());
});

// Serve robots.txt
router.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Mount the router for sitemap and robots.txt routes
  app.use(router);

  // Contact form submission with enhanced security
  app.post('/api/contact', sanitizeInput, async (req, res) => {
    try {
      // Additional validation
      const { name, email, phone, service, message } = req.body;

      // Validate email format
      if (!validator.isEmail(email)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email format',
        });
      }

      // Validate phone number (basic Nigerian format)
      if (phone && !validator.matches(phone, /^(\+234|0)[789][01]\d{8}$/)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid phone number format',
        });
      }

      // Check for suspicious content
      const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /data:text\/html/i,
      ];

      const allText = `${name} ${email} ${phone || ''} ${service || ''} ${message}`;
      if (suspiciousPatterns.some(pattern => pattern.test(allText))) {
        return res.status(400).json({
          success: false,
          message: 'Invalid content detected',
        });
      }

      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);

      // In a real application, you would send an email notification here
      console.log('New contact submission:', submission);

      res.json({
        success: true,
        message:
          'Thank you for your inquiry! We will contact you within 24 hours.',
        id: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({
          success: false,
          message:
            'An error occurred while processing your request. Please try again.',
        });
      }
    }
  });

  // Get contact submissions (protected admin endpoint)
  app.get('/api/contact-submissions', authenticateAdmin, async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching contact submissions',
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

export default router;
