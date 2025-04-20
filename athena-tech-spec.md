
# Project Technical Specification

## Project Overview

The project is a monorepo named **"Athena"** using **Turborepo** for managing multiple applications. It follows a modern, full-stack architecture with separate applications for different platforms.

## Technology Stack

### Core Technologies
- **Package Manager:** Bun v1.2.10
- **Build System:** Turborepo v2.4.2

### Code Quality
- **Biome (v1.9.4):** Linting and formatting
- **Husky (v9.1.7):** Git hooks
- **lint-staged (v15.5.0):** Pre-commit checks

## Applications

### Server Application (`apps/server`)
- TypeScript-based backend
- Uses Drizzle ORM for database management
- Environment configuration via `.env`
- Database operations:
  - `db:push`: Schema migrations
  - `db:studio`: Database management UI

### Web Application (`apps/web`)
- Next.js framework
- TypeScript support
- PostCSS for styling
- Environment configuration via `.env`
- Component-based architecture

### Native Application (`apps/native`)
- Expo-based React Native application
- TypeScript support
- NativeWind for styling (Tailwind CSS for React Native)
- Metro bundler configuration
- Babel configuration
- Asset management
- Environment configuration via `.env`

### Documentation (`apps/docs`)
- Astro-based documentation site
- TypeScript support
- Static site generation
- Public assets management

## Project Structure

```bash
athena/
├── apps/
│   ├── docs/
│   ├── native/
│   ├── server/
│   └── web/
├── packages/
│   ├── ui/                # Shared design system
│   ├── config/            # Shared eslint/tsconfig/tailwind presets
│   ├── types/             # Shared types/interfaces
│   └── utils/             # Shared helpers
├── .env
├── .gitignore
├── bun.lockb
├── turbo.json
├── tsconfig.json
└── README.md
```

## Build and Development Workflows

### Development Commands
- `dev`: Start all applications in development mode
- `dev:native`: Start native app development
- `dev:web`: Start web app development
- `dev:server`: Start server development
- `build`: Build all applications
- `check-types`: Type checking across all applications

### Database Operations
- `db:push`: Push database schema changes
- `db:studio`: Open database management interface

## Application Connections

### Server to Web/Native
- Server application serves as backend for both web and native apps
- Shared database schema through Drizzle ORM
- Environment-based configuration for different environments

### Web to Native
- Shared business logic and data models
- Consistent styling via NativeWind/Tailwind
- TypeScript for type safety across platforms

## Documentation

- Standalone documentation site
- Reference for all applications
- Static site generation for performance

## Development Environment

### Code Quality
- Pre-commit hooks for quality checks
- Biome for linting and formatting
- TypeScript for type safety
- Consistent code style across apps

### Build System
- Turborepo for monorepo management
- Caching for faster builds
- Parallel task execution
- Environment-specific configurations

### Version Control
- Git-based version control
- Husky for git hooks
- Pre-commit checks for code quality

## Optional Enhancements

- Add CI/CD workflow (GitHub Actions, etc.)
- Shared packages:
  - `packages/ui`: Shadcn/Tailwind components
  - `packages/types`: Shared models
- Add contributing guidelines
- API documentation (`@hono/zod-openapi`)
- Central error tracking (e.g., Sentry)
- Storybook for UI components

---

This project follows a modern, scalable architecture with clear separation of concerns between applications while maintaining consistency through shared tooling and configurations.
