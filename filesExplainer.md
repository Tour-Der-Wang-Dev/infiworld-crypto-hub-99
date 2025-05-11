
# Project File Structure Explained

This document provides an overview of all files in the project, organized by their folder hierarchy. Each file is marked with an emoji to indicate its importance:

- 🟢 - Critical file, heavily imported or referenced across the project
- 🟡 - Important file, moderately referenced
- 🟠 - Supportive file, less frequently referenced

## Root Files

- `.env` 🟢 - Environment configuration file containing Supabase and Mapbox credentials
- `index.html` 🟢 - Main HTML entry point for the application
- `vite.config.ts` 🟢 - Vite configuration file with path aliases and plugin settings
- `tailwind.config.ts` 🟡 - Tailwind CSS configuration with custom colors and theme settings
- `README.md` 🟢 - Project documentation and setup guide
- `package.json` 🟢 - Project dependencies and scripts
- `postcss.config.js` 🟠 - PostCSS configuration for Tailwind CSS processing
- `tsconfig.json` 🟡 - TypeScript configuration for the project
- `tsconfig.app.json` 🟠 - Additional TypeScript settings for the app
- `tsconfig.node.json` 🟠 - TypeScript settings for Node.js environments

## src/ Directory

### Main Files

- `src/main.tsx` 🟢 - Application entry point that renders the React app
- `src/App.tsx` 🟢 - Root component defining routes and global providers
- `src/App.css` 🟠 - Global CSS styles for the application
- `src/index.css` 🟠 - Additional global CSS styles including Tailwind imports
- `src/vite-env.d.ts` 🟠 - TypeScript declaration file for Vite environment

### src/components/ Directory

#### Common Components

- `src/components/common/InfiWorldImage.tsx` 🟠 - Image component with optimization features

#### Layout Components

- `src/components/layout/Navbar.tsx` 🟢 - Main navigation component for the application
- `src/components/layout/Footer.tsx` 🟡 - Footer component displayed across all pages

#### UI Components (shadcn/ui)

- `src/components/ui/button.tsx` 🟢 - Reusable button component with variants
- `src/components/ui/toast.tsx` 🟡 - Toast notification component
- `src/components/ui/toaster.tsx` 🟡 - Container for toast notifications
- `src/components/ui/sonner.tsx` 🟠 - Alternative toast notification system
- `src/components/ui/[other UI components]` 🟠 - Various UI components from shadcn/ui library

#### Map Components

- `src/components/map/MapComponent.tsx` 🟡 - MapBox integration for displaying crypto store locations
- `src/components/map/StoreDetails.tsx` 🟡 - Component for displaying selected store information
- `src/components/map/StoreFilters.tsx` 🟠 - Filtering controls for crypto stores

#### Marketplace Components

- `src/components/marketplace/FilterSidebar.tsx` 🟠 - Sidebar with filtering options for listings
- `src/components/marketplace/ListingCard.tsx` 🟠 - Card component for displaying marketplace listings

#### Freelance Components

- `src/components/freelance/FreelancerCard.tsx` 🟠 - Card component for displaying freelancer profiles

#### Reservation Components

- `src/components/reservations/ReservationForm.tsx` 🟠 - Form for creating new reservations
- `src/components/reservations/ReservationDetails.tsx` 🟠 - Component for displaying reservation details
- `src/components/reservations/ReservationSearchResults.tsx` 🟠 - Results display for reservation searches

#### SEO Components

- `src/components/seo/SEOHead.tsx` 🟠 - Component for managing page meta tags

### src/pages/ Directory

- `src/pages/Index.tsx` 🟢 - Homepage component
- `src/pages/Map.tsx` 🟢 - Crypto payment locations map page
- `src/pages/Marketplace.tsx` 🟡 - Crypto marketplace page
- `src/pages/Freelance.tsx` 🟡 - Freelance services page
- `src/pages/Reservations.tsx` 🟡 - Travel reservations page
- `src/pages/Verification.tsx` 🟡 - Identity verification page
- `src/pages/Login.tsx` 🟡 - User login page
- `src/pages/Signup.tsx` 🟡 - User registration page
- `src/pages/ForgotPassword.tsx` 🟠 - Password recovery page
- `src/pages/NotFound.tsx` 🟠 - 404 error page

### src/hooks/ Directory

- `src/hooks/use-toast.ts` 🟡 - Custom hook for managing toast notifications
- `src/hooks/use-mobile.tsx` 🟡 - Custom hook for detecting mobile devices

### src/lib/ Directory

- `src/lib/utils.ts` 🟡 - Utility functions used across the application

### src/integrations/ Directory

- `src/integrations/supabase/client.ts` 🟢 - Supabase client configuration
- `src/integrations/supabase/types.ts` 🟡 - TypeScript types for Supabase database schema

### src/data/ Directory

- `src/data/marketplace.ts` 🟠 - Mock data for the marketplace feature

## public/ Directory

- `public/assets/` 🟠 - Static assets including images
- `public/favicon.ico` 🟠 - Website favicon
- `public/robots.txt` 🟠 - Instructions for web crawlers
- `public/sitemap.xml` 🟠 - Site structure information for search engines

## supabase/ Directory

- `supabase/config.toml` 🟢 - Supabase project configuration
