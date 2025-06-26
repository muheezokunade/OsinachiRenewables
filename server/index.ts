import express, { type Request, Response, NextFunction } from 'express';
import { registerRoutes } from './routes';
import { setupVite, serveStatic } from './vite';
import { createServer } from 'http';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { securityConfig } from './config';
import { generateSitemapXML, robotsTxt } from '../client/src/utils/sitemap';

const app = express();

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...securityConfig.csp.directives,
        upgradeInsecureRequests:
          process.env.NODE_ENV === 'production' ? [] : null,
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    noSniff: true,
    frameguard: { action: 'deny' },
    xssFilter: true,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  })
);

// Rate limiting
const limiter = rateLimit({
  ...securityConfig.rateLimit,
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: Math.ceil(securityConfig.rateLimit.windowMs / 1000),
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to API routes
app.use('/api/', limiter);

// Body parsing middleware with size limits
app.use(
  express.json({
    limit: '10mb',
    verify: (req: Request, res: Response, buf: Buffer, encoding: string) => {
      // Add request size logging for monitoring
      if (buf.length > 1000000) {
        // 1MB
        console.warn(
          `Large request received: ${buf.length} bytes from ${req.ip}`
        );
      }
    },
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '10mb',
  })
);

// Security headers middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  // Remove server identification
  res.removeHeader('X-Powered-By');

  // Add additional security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=()'
  );

  next();
});

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.socket.remoteAddress;

  console.log(`${timestamp} [${method}] ${url} - ${ip}`);
  next();
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Server error:', err);

  // Don't leak error details in production
  const message =
    process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message;

  res.status(500).json({
    success: false,
    message,
  });
});

const server = createServer(app);

async function startServer() {
  try {
    const httpServer = await registerRoutes(app);

    if (process.env.NODE_ENV === 'development') {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      const formattedTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      console.log(`${formattedTime} [express] serving on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

// Serve sitemap.xml and robots.txt before Vite middleware
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(generateSitemapXML());
});

app.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});
