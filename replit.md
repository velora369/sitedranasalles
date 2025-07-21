# Replit.md

## Overview

This is a full-stack web application for Dr. Ana Carolina Salles, a Clinical Oncologist, built as a single landing page website. The application showcases her medical practice, specialties, and provides contact information for potential patients. The site is designed with a modern, professional aesthetic focusing on healthcare and trustworthiness.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation of concerns:

- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for data management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Single Page Application (SPA)**: Built with React 18+ and TypeScript
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling System**: Tailwind CSS with custom color palette for medical branding
- **Build Tool**: Vite for fast development and optimized production builds
- **Font Stack**: Google Fonts (Playfair Display, Montserrat, Open Sans) for typography hierarchy

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Development Stack**: tsx for TypeScript execution in development
- **API Structure**: RESTful endpoints with /api prefix
- **Session Management**: Built-in session storage interface
- **Error Handling**: Centralized error middleware

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations

### UI/UX Design System
- **Color Palette**: 
  - Primary Green: #1B4332 (medical trust and nature)
  - Secondary Green: #2D5A47 (depth and professionalism)
  - Gold Primary: #D4AF37 (excellence and distinction)
  - Gold Light: #F4E4BC (subtle backgrounds)
- **Typography**: Professional medical hierarchy with clear readability
- **Layout**: Landing page format with smooth scroll navigation
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## Data Flow

### Client-Server Communication
1. **Static Assets**: Served through Vite development server or Express static middleware
2. **API Requests**: RESTful communication between React frontend and Express backend
3. **Database Queries**: Drizzle ORM handles type-safe database operations
4. **State Management**: TanStack Query manages server state with caching and synchronization

### Page Structure (Landing Page Sections)
1. **Hero Section**: Introduction and call-to-action
2. **About Section**: Professional background and credentials
3. **Specialties Section**: Medical expertise and services
4. **Congress Section**: Scientific activities and participation
5. **Testimonials Section**: Patient feedback (placeholder for future content)
6. **Blog Preview**: Medical information and patient resources
7. **Contact Section**: Appointment booking and communication

### Form Handling
- **Contact Forms**: Client-side validation with WhatsApp integration
- **Data Validation**: Zod schemas for type-safe form processing
- **User Feedback**: Toast notifications for user interactions

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Utilities**: date-fns for date manipulation, nanoid for unique IDs

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full type safety across the stack
- **Development Experience**: Replit-specific plugins for development environment

### External Integrations
- **WhatsApp Business**: Direct messaging integration for appointment booking
- **Google Fonts**: Professional typography loading
- **Unsplash**: High-quality medical imagery (development placeholders)
- **Instagram**: Social media integration (@anacarolinasallesoogia)

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` script

### Environment Configuration
- **Database URL**: PostgreSQL connection string via environment variables
- **Development**: Node.js development server with hot reloading
- **Production**: Optimized Express server serving static assets and API

### Performance Optimization
- **Asset Optimization**: Vite handles code splitting and tree shaking
- **Image Optimization**: Responsive images with proper loading strategies
- **Database**: Connection pooling through Neon's serverless architecture
- **Caching**: TanStack Query provides intelligent client-side caching

### Monitoring and Maintenance
- **Error Tracking**: Centralized error handling with logging
- **Development Tools**: Replit-specific debugging and runtime error overlays
- **Type Safety**: Full TypeScript coverage prevents runtime errors
- **Code Quality**: Consistent formatting and linting standards