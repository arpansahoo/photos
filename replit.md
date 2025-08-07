# Photography Portfolio

## Overview

This is a full-stack photography portfolio application built with React, Express, and TypeScript. The application showcases a photographer's work through an elegant, responsive interface with features like image galleries, video galleries (YouTube integration), modal views, and smooth scrolling navigation. It follows a modern web development approach with a monorepo structure containing both client and server code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development experience
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the entire stack
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Storage**: Currently using in-memory storage with plans for database integration
- **API Design**: RESTful endpoints for image and video management

### Component Architecture
- **UI Components**: Radix UI primitives wrapped with custom styling through shadcn/ui
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Smooth scrolling single-page application with sticky header
- **Image Handling**: Modal-based image viewing with keyboard navigation support
- **Video Integration**: YouTube video embedding with responsive grid layout

### Data Layer
- **Schema**: Zod validation for type-safe data handling
- **Storage Interface**: Abstracted storage layer allowing easy transition from memory to database
- **Image Model**: Structured data with title, category, URL, alt text, and descriptions
- **Video Model**: Structured data with title, category, YouTube ID, and descriptions for video content

### Development Workflow
- **Monorepo**: Shared TypeScript configuration and utilities between client and server
- **Hot Reload**: Vite development server with HMR for rapid development
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)
- **Type Safety**: Shared types between frontend and backend through workspace structure

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Express.js**: Web server framework with middleware support
- **TypeScript**: Full-stack type safety and development experience

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Comprehensive primitive component library for accessibility
- **shadcn/ui**: Pre-built component library built on Radix primitives
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool and development server with plugin ecosystem
- **Drizzle Kit**: Database schema management and migrations
- **PostCSS**: CSS processing with Tailwind integration

### Database and Storage
- **Neon Database**: Serverless PostgreSQL database (configured but not yet implemented)
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Connection Pooling**: Ready for database connection management

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Utilities and Helpers
- **clsx**: Conditional className utility
- **class-variance-authority**: Component variant management
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation

### Replit Integration
- **Cartographer**: Development environment integration
- **Runtime Error Modal**: Enhanced error handling in development