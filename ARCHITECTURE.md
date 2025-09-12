# Project Architecture

## Overview

Crono is a modern React-based dashboard application built with TypeScript, Vite, and Material-UI. The application follows a component-driven architecture with clear separation of concerns and modular design patterns.

## Technology Stack

### Core Technologies

- **React 18** - UI library with functional components and hooks
- **TypeScript** - Type-safe JavaScript superset
- **Vite** - Fast build tool and development server
- **Material-UI (MUI)** - Component library for consistent UI
- **React Router** - Client-side routing
- **React Query (@tanstack/react-query)** - Data fetching and caching
- **SCSS Modules** - Styled components with CSS Modules

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Stylelint** - SCSS linting
- **Husky** - Git hooks for code quality
- **Yarn** - Package manager

## Project Structure

```
src/
├── api/                    # API layer
│   ├── RESTClient/         # REST API client implementation
│   │   ├── RESTClient.ts   # Main API client class
│   │   ├── types.ts        # API types and interfaces
│   │   └── index.ts        # API exports
│   ├── types.ts            # Global API types
│   └── index.ts            # API entry point
├── assets/                 # Static assets
│   └── Icons/              # SVG icons organized by context
│       ├── HomePage/       # HomePage specific icons
│       └── DrawerMenu/     # Menu related icons
├── components/             # Reusable UI components
│   ├── SignalsItem/        # Signal card component
│   ├── PerformanceItem/    # Performance metric component
│   ├── TaskStatusItem/     # Task status component
│   ├── DrawerMenu/         # Navigation drawer
│   └── onBoardingItem/     # Onboarding step component
├── layouts/                # Page layout components
│   ├── AppLayout/          # Root application layout
│   └── MainLayout/         # Main dashboard layout
│       ├── manager/        # Layout state management
│       └── hooks/          # Layout specific hooks
├── managers/               # Global state managers
│   └── ThemeManager/       # Theme and styling management
├── pages/                  # Page components
│   └── HomePage/           # Dashboard homepage
│       └── sections/       # Homepage sections
│           ├── Welcome/    # Welcome section
│           ├── Replies/    # Replies section
│           ├── Performance/# Performance metrics
│           ├── Signals/    # Signals feed
│           ├── TodayTask/  # Today's tasks
│           └── OnBoarding/ # Onboarding guide
├── queries/                # React Query hooks
│   └── signals/            # Signal-related queries
│       ├── useGetSignalsQry.ts    # Fetch signals
│       └── useDeleteSignalMut.ts  # Delete signal
├── types/                  # TypeScript type definitions
├── ui/                     # Base UI components
│   └── Box/                # Styled container component
├── scss/                   # Global styles
│   └── fonts.scss          # Font definitions
├── App.tsx                 # Root application component
├── main.tsx                # Application entry point
└── index.scss              # Global styles with CSS layers
```

## Architecture Patterns

### Component Architecture

- **Functional Components**: All components use React functional components with hooks
- **TypeScript**: Strict typing for props, state, and API responses
- **CSS Modules**: Component-scoped styling with SCSS modules
- **Barrel Exports**: Index files for clean imports

### Data Management

- **React Query**: Server state management with caching and optimistic updates
- **Context API**: Local state management for layouts and themes
- **Custom Hooks**: Reusable state logic

### Styling System

- **CSS Cascade Layers**: Organized style hierarchy
  - `@layer base` - Reset and base styles
  - `@layer ui` - UI component styles
  - `@layer component` - Component-specific styles
  - `@layer section` - Page section styles
  - `@layer page` - Page-specific styles
  - `@layer mui` - Material-UI overrides
  - `@layer overrides` - Final overrides
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Responsive Design**: Mobile-first approach with breakpoint system

### File Organization

- **Feature-based**: Components grouped by functionality
- **Co-location**: Related files (component, styles, types) kept together
- **Barrel Exports**: Clean import paths through index files

## Naming Conventions

### Files and Folders

- **Components**: PascalCase (e.g., `SignalsItem.tsx`)
- **Folders**: PascalCase for components, camelCase for utilities
- **CSS Classes**: PascalCase for root component class, camelCase for child elements

### TypeScript

- **Types/Interfaces**: Prefixed with `T` (e.g., `TSignal`, `TResponse`)
- **Components**: PascalCase function names
- **Variables**: camelCase

### CSS

- **Root Classes**: Match component name (e.g., `.SignalsItem`)
- **Child Elements**: camelCase (e.g., `.actionType`, `.contentWrapper`)
- **CSS Variables**: kebab-case with semantic naming

## API Layer

### REST Client

- **Centralized API**: Single `RESTClient` class for all API calls
- **Type Safety**: Typed responses with `TResponse<T>` wrapper
- **Error Handling**: Consistent error handling across endpoints
- **JSON-based**: Mock API using static JSON files for development

### Data Flow

1. **Components** call React Query hooks
2. **Hooks** use API client methods
3. **API Client** handles HTTP requests and response formatting
4. **React Query** manages caching and state

## State Management

### Server State

- **React Query**: Handles all server data fetching, caching, and mutations
- **Optimistic Updates**: Immediate UI updates for better UX
- **Cache Management**: Automatic cache invalidation and updates

### Client State

- **React Context**: Layout state (drawer open/closed, auth status)
- **Component State**: Local component state with useState
- **Theme Management**: Global theme state with context

## Grid Layout System

The HomePage uses a CSS Grid layout with the following structure:

```
"Grid1 Grid1 Grid2"
"Grid4 Grid4 Grid3"
```

- **Grid1**: Welcome + Replies + TodayTask (spans 2 columns)
- **Grid2**: Performance (top right)
- **Grid3**: OnBoarding (bottom right)
- **Grid4**: Signals (bottom, spans 2 columns)

## Component Communication

### Props Flow

- **Parent to Child**: Props for data and configuration
- **Child to Parent**: Callbacks for events and state updates
- **Sibling Communication**: Through shared parent state or React Query cache

### Event Handling

- **User Actions**: onClick, onChange handlers passed as props
- **API Actions**: Handled through React Query mutations
- **State Updates**: Context providers for global state

## Performance Optimizations

### Code Splitting

- **Lazy Loading**: Pages loaded on demand
- **Component Chunking**: Large components split into smaller pieces

### Caching

- **React Query**: Automatic data caching with TTL
- **Build Optimization**: Vite's automatic code splitting and tree shaking

### Bundle Optimization

- **Asset Optimization**: Automatic image optimization
- **CSS Optimization**: CSS bundling and minification
- **Dead Code Elimination**: Tree shaking for unused code

## Development Workflow

### Code Quality

- **Linting**: ESLint for TypeScript/JavaScript
- **Formatting**: Prettier for consistent code style
- **Style Linting**: Stylelint for SCSS
- **Git Hooks**: Pre-commit hooks ensure code quality

### Build Process

- **Development**: Vite dev server with HMR
- **Production**: Optimized build with chunking
- **Type Checking**: TypeScript compilation with strict mode

## Deployment

### Vercel Configuration

- **Framework**: Vite detection
- **Build Command**: `yarn build`
- **Output Directory**: `dist`
- **SPA Routing**: Configured for client-side routing
- **Asset Caching**: Optimized cache headers for static assets

This architecture provides a scalable, maintainable, and performant foundation for the Crono dashboard application.
