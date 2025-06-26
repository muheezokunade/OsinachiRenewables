# Security Documentation

## Security Fixes Applied

### ✅ Fixed Issues

1. **Admin Endpoint Protection**
   - Added authentication middleware to `/api/contact-submissions`
   - Requires `Authorization: Bearer <token>` header
   - Token must be set in `ADMIN_TOKEN` environment variable

2. **Session Security**
   - Removed hardcoded session secret
   - Auto-generates secure session secret if not provided
   - Added proper session configuration

3. **Enhanced Security Headers**
   - HSTS (HTTP Strict Transport Security)
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - X-XSS-Protection: 1; mode=block
   - Permissions-Policy restrictions
   - Content Security Policy (CSP)

4. **Input Validation & Sanitization**
   - Enhanced input sanitization
   - Suspicious content detection
   - Email and phone number validation
   - Request size monitoring

5. **Performance & Security**
   - Implemented code splitting (reduced main bundle from 746KB to 425KB)
   - Added manual chunk configuration
   - Improved error handling
   - Request logging for monitoring

6. **Dependency Updates**
   - Updated Vite to v7.0.0 (security patches)
   - Updated Drizzle Kit to v0.31.3
   - Removed deprecated packages

### ⚠️ Remaining Vulnerabilities

1. **esbuild Dependency** (Moderate)
   - Nested in development dependencies
   - Only affects development server
   - **Impact**: Development only, not production
   - **Mitigation**: Restrict development server access

## Environment Setup

### Required Environment Variables

```bash
# Generate secure keys using:
# node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

SESSION_SECRET=<32-character-hex-string>
ADMIN_TOKEN=<32-character-hex-string>
```

### Development Setup

1. Copy `env.example` to `.env`
2. Generate secure keys:
   ```bash
   node -e "console.log('SESSION_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
   node -e "console.log('ADMIN_TOKEN=' + require('crypto').randomBytes(32).toString('hex'))"
   ```
3. Add the generated keys to your `.env` file

### Production Setup

1. Use environment-specific secure key management
2. Never commit secrets to version control
3. Rotate secrets regularly
4. Use strong, randomly generated values
5. Set `NODE_ENV=production`

## API Security

### Protected Endpoints

- `GET /api/contact-submissions` - Requires admin authentication

### Usage Example

```bash
# Access admin endpoint
curl -H "Authorization: Bearer your-admin-token" \
     http://localhost:3000/api/contact-submissions
```

## Security Best Practices

### Development
- Use localhost binding (127.0.0.1) for development server
- Enable source maps for debugging
- Monitor request sizes and suspicious patterns

### Production
- Set secure environment variables
- Enable HTTPS with proper certificates
- Use secure session configuration
- Monitor and log security events
- Regular security audits and updates

### Monitoring
- Request logging is enabled
- Large request detection (>1MB)
- Error tracking and reporting
- IP-based rate limiting

## Security Headers

The following security headers are automatically applied:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```

## Rate Limiting

- **Development**: 100 requests per 15 minutes per IP
- **Production**: 50 requests per 15 minutes per IP
- Applied to all `/api/*` endpoints

## Content Security Policy

Configured to allow:
- Self-hosted resources
- Google Fonts
- Google Analytics
- Inline styles (for CSS-in-JS)
- Data URLs for images

## Vulnerability Reporting

If you discover a security vulnerability, please:
1. Do not create a public issue
2. Contact the development team directly
3. Provide detailed information about the vulnerability
4. Allow time for the issue to be addressed before disclosure

## Security Checklist

- [x] Admin endpoints protected
- [x] Session security configured
- [x] Input validation and sanitization
- [x] Security headers implemented
- [x] Rate limiting enabled
- [x] Error handling improved
- [x] Code splitting for performance
- [x] Dependency updates applied
- [ ] SSL/TLS certificate configured (production)
- [ ] Database security review
- [ ] Regular security audits scheduled 