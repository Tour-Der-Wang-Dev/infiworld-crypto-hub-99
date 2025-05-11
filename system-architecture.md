
# System Architecture

This document provides a high-level overview of the InfiWorld Crypto Hub system architecture, showing how the different components interact.

```
┌─────────────────────────────────────────────────────────────────┐
│                          Client Browser                         │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                         React Application                       │
│                                                                 │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  ┌────────┐  │
│  │    Pages    │  │   Components  │  │   Hooks   │  │  Utils │  │
│  │             │  │              │  │            │  │        │  │
│  │  - Index    │──│  - Navbar    │  │- useToast │  │- cn    │  │
│  │  - Map      │  │  - Footer    │  │- useMobile│  │        │  │
│  │  - Market   │  │  - Map       │  └────────────┘  └────────┘  │
│  │  - Login    │  │  - Store     │                             │
│  │  - etc...   │  │  - etc...    │                             │
│  └─────────────┘  └──────────────┘                             │
│                                                                 │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                       External Services                         │
│                                                                 │
│  ┌─────────────────────────┐      ┌───────────────────────────┐ │
│  │      Supabase           │      │         Mapbox            │ │
│  │                         │      │                           │ │
│  │  ┌─────────┐ ┌────────┐ │      │  - Interactive Maps       │ │
│  │  │Database │ │  Auth  │ │      │  - Geocoding              │ │
│  │  │         │ │        │ │      │  - Location Services      │ │
│  │  │- stores │ │- signup│ │      └───────────────────────────┘ │
│  │  │- users  │ │- login │ │                                    │
│  │  │- etc... │ │- etc.. │ │                                    │
│  │  └─────────┘ └────────┘ │                                    │
│  │                         │                                    │
│  │  ┌─────────┐ ┌────────┐ │                                    │
│  │  │ Storage │ │ Edge   │ │                                    │
│  │  │         │ │Functions│ │                                    │
│  │  └─────────┘ └────────┘ │                                    │
│  └─────────────────────────┘                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Core Components

### Frontend (React Application)

1. **Pages**
   - Entry points for different sections of the application
   - Handle routing and high-level state management

2. **Components**
   - Reusable UI elements
   - Feature-specific components (map, marketplace, etc.)
   - Layout components (navbar, footer)

3. **Hooks**
   - Custom React hooks for shared functionality
   - State management and business logic

4. **Utilities**
   - Helper functions
   - Common utilities used across the application

### Backend (Supabase)

1. **Authentication**
   - User registration and login
   - Session management
   - Authorization

2. **Database**
   - PostgreSQL database for structured data
   - Tables for stores, users, listings, etc.
   - Row-level security policies

3. **Storage**
   - File storage for images and documents
   - Public and private buckets

4. **Edge Functions**
   - Serverless functions for custom backend logic
   - API integrations
   - Background processing

### External Services

1. **Mapbox**
   - Interactive maps for store locations
   - Geocoding services
   - Location-based features

## Data Flow

1. User interacts with the React application
2. Application makes authenticated requests to Supabase
3. Supabase enforces security policies and returns data
4. React components render the data for the user
5. External services like Mapbox provide additional functionality

## Authentication Flow

```
┌───────┐    ┌────────────┐    ┌─────────────┐    ┌──────────┐
│ User  │───►│Login/Signup│───►│Supabase Auth│───►│JWT Token │
└───────┘    └────────────┘    └─────────────┘    └──────────┘
                                                        │
┌───────────────┐    ┌─────────────┐    ┌──────────────▼─┐
│Protected Data │◄───│ RLS Policies │◄───│Authenticated   │
│  & Features   │    │              │    │   Requests     │
└───────────────┘    └─────────────┘    └────────────────┘
```

This high-level architecture provides an overview of how the different components of the InfiWorld Crypto Hub application work together. The modular design allows for scalability and maintenance, while leveraging Supabase for backend functionality reduces the need for custom server infrastructure.
