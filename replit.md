# Osinachi Renewable Energy - System Architecture Guide

## Overview

This is a full-stack web application for Osinachi Renewable Energy, a Nigerian power solutions
provider. The application serves as a business website showcasing their renewable energy services,
including generator maintenance, solar systems, and energy consulting. It features a modern React
frontend with a Node.js/Express backend, PostgreSQL database, and includes contact form
functionality with analytics tracking.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form and data retrieval
- **Error Handling**: Centralized error middleware
- **Logging**: Custom request/response logging middleware

### Data Layer

- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with type-safe database operations
- **Schema Management**: Drizzle Kit for migrations
- **Validation**: Zod schemas for data validation
- **Development Fallback**: In-memory storage implementation

## Key Components

### Database Schema (`shared/schema.ts`)

- **Users Table**: Basic user authentication structure
- **Contact Submissions Table**: Stores customer inquiries with timestamps
- **Type Safety**: Generated TypeScript types from database schema
- **Validation**: Zod schemas for input validation

### API Endpoints (`server/routes.ts`)

- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact-submissions` - Retrieve all contact submissions (admin)
- Error handling with proper HTTP status codes
- Input validation using Zod schemas

### Frontend Pages

- **Home**: Complete landing page with all sections
- **About**: Company story and values
- **Services**: Detailed service offerings
- **Portfolio**: Project showcase with filtering
- **Contact**: Contact form and FAQ section

### UI Components

- **Navigation**: Responsive header with mobile menu
- **Hero**: Call-to-action section with analytics tracking
- **Contact Form**: Multi-field form with validation and error handling
- **Cookie Consent**: GDPR-compliant cookie banner
- **Analytics Integration**: Google Analytics with page view and event tracking

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Form Submission**: Contact form data validated with Zod
3. **API Request**: TanStack Query sends data to Express endpoints
4. **Database Operations**: Drizzle ORM handles PostgreSQL operations
5. **Response Handling**: Success/error states managed in React components
6. **Analytics Tracking**: User interactions tracked via Google Analytics

## External Dependencies

### Core Technologies

- **Database**: PostgreSQL with Neon serverless driver
- **Analytics**: Google Analytics 4 integration
- **Fonts**: Google Fonts (Inter and Poppins)
- **Icons**: Lucide React icon library

### Development Tools

- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code quality and formatting
- **Vite Plugins**: Development enhancements and error overlay

### UI Libraries

- **Radix UI**: Headless components for accessibility
- **Class Variance Authority**: Component variant management
- **Tailwind CSS**: Utility-first styling
- **React Hook Form**: Form state management

## Deployment Strategy

### Replit Configuration

- **Platform**: Replit with autoscale deployment
- **Build Process**: Vite builds frontend, esbuild bundles backend
- **Port Configuration**: Internal port 5000, external port 80
- **Environment**: Node.js 20, PostgreSQL 16, web modules

### Production Build

- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server to `dist/index.js`
- **Static Files**: Express serves built frontend files
- **Environment Variables**: Database URL and analytics keys required

### Database Setup

- **Schema Deployment**: `npm run db:push` applies Drizzle migrations
- **Connection**: PostgreSQL via environment variable `DATABASE_URL`
- **Fallback**: Memory storage for development without database

## Changelog

- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
