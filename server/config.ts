import { z } from 'zod';
import crypto from 'crypto';

// Environment variable validation schema
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z
    .string()
    .transform(Number)
    .pipe(z.number().min(1).max(65535))
    .default('3000'),
  DATABASE_URL: z.string().optional(),
  SESSION_SECRET: z.string().min(32).optional(),
  ADMIN_TOKEN: z.string().min(32).optional(),
  VITE_GA_MEASUREMENT_ID: z.string().optional(),
});

// Validate environment variables
const env = envSchema.parse(process.env);

// Generate a secure session secret if not provided
const generateSecureSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Security configuration
export const securityConfig = {
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  },

  // CORS settings
  cors: {
    origin:
      env.NODE_ENV === 'production'
        ? [
            'https://osinachirenewables.com',
            'https://www.osinachirenewables.com',
          ]
        : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  },

  // Content Security Policy
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        'https://www.googletagmanager.com',
      ],
      connectSrc: ["'self'", 'https://www.google-analytics.com'],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },

  // Session configuration
  session: {
    secret: env.SESSION_SECRET || generateSecureSecret(),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'strict' as const,
    },
  },

  // Admin authentication
  adminToken: env.ADMIN_TOKEN || generateSecureSecret(),
};

export { env };
