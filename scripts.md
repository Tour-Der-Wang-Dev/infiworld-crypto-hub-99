
# Available Scripts

This document outlines all available npm/bun scripts in the project, their purpose, and how to use them.

## Development Scripts

### `dev`

**Purpose**: Starts the development server with hot-reload enabled.

**Usage**:
```bash
npm run dev
# or
bun dev
```

**Example Output**:
```
  VITE v5.X.X  ready in XXX ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://XXX.XXX.XXX.XXX:8080/
```

**Notes**: This is the primary script for development. It will automatically reload the page when you make changes to the code.

### `build`

**Purpose**: Creates a production-ready build of the application.

**Usage**:
```bash
npm run build
# or
bun build
```

**Example Output**:
```
vite v5.X.X building for production...
✓ XXX modules transformed.
dist/index.html                    X.XX kB
dist/assets/index-XXXXXXXX.css     XXX.XX kB
dist/assets/index-XXXXXXXX.js      XXX.XX kB
```

**Notes**: This will create optimized files in the `dist` directory ready for deployment.

### `preview`

**Purpose**: Locally preview the production build.

**Usage**:
```bash
npm run preview
# or
bun preview
```

**Example Output**:
```
  ➜  Local:   http://localhost:4173/
  ➜  Network: http://XXX.XXX.XXX.XXX:4173/
```

**Notes**: Run this after `build` to test the production version locally before deployment.

## Code Quality Scripts

### `lint`

**Purpose**: Runs the linter to check for code quality issues.

**Usage**:
```bash
npm run lint
# or
bun lint
```

**Example Output**:
```
./src/components/Example.tsx
  Line X:X:  'unused' is defined but never used  @typescript-eslint/no-unused-vars
```

**Notes**: Helps maintain code quality and consistency across the project.

### `format`

**Purpose**: Formats all code according to project standards using Prettier.

**Usage**:
```bash
npm run format
# or
bun format
```

**Example Output**:
```
src/components/Example.tsx 42ms
src/pages/Index.tsx 37ms
```

**Notes**: Automatically fixes formatting issues in the codebase.

## Testing Scripts

### `test`

**Purpose**: Runs the test suite.

**Usage**:
```bash
npm test
# or
bun test
```

**Example Output**:
```
 PASS  src/components/__tests__/Example.test.tsx
 PASS  src/utils/__tests__/formatters.test.ts

Test Suites: 2 passed, 2 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.145s
```

**Notes**: Executes all tests in the project to ensure functionality is working as expected.

### `test:watch`

**Purpose**: Runs tests in watch mode, re-running when files change.

**Usage**:
```bash
npm run test:watch
# or
bun test:watch
```

**Notes**: Useful during active development to get immediate feedback on test status.

## Deployment Scripts

### `deploy`

**Purpose**: Deploys the application to the production environment.

**Usage**:
```bash
npm run deploy
# or
bun deploy
```

**Notes**: This script handles building and deploying the application to the hosting platform.

## Type Checking

### `typecheck`

**Purpose**: Runs TypeScript compiler to check for type errors without emitting files.

**Usage**:
```bash
npm run typecheck
# or
bun typecheck
```

**Example Output**:
```
src/components/Example.tsx:42:10 - error TS2322: Type 'string' is not assignable to type 'number'.

42   const id: number = "42"; // Error: Type 'string' is not assignable to type 'number'
            ~~~~~
```

**Notes**: Helps catch type-related issues before they cause runtime errors.

## Database Scripts

### `db:push`

**Purpose**: Pushes local database schema changes to the Supabase project.

**Usage**:
```bash
npm run db:push
# or
bun db:push
```

**Notes**: Requires appropriate Supabase credentials to be set in the environment.

### `db:reset`

**Purpose**: Resets the local development database to a clean state.

**Usage**:
```bash
npm run db:reset
# or
bun db:reset
```

**Notes**: Use with caution as this will remove all data in the development database.

## Combined Scripts

### `validate`

**Purpose**: Runs linting, type checking, and tests to validate the codebase.

**Usage**:
```bash
npm run validate
# or
bun validate
```

**Notes**: Useful for pre-commit or pre-deploy validation to ensure code quality.

## Custom Scripts

### `generate:types`

**Purpose**: Generates TypeScript types from the Supabase database schema.

**Usage**:
```bash
npm run generate:types
# or
bun generate:types
```

**Notes**: Keeps the TypeScript types in sync with the database schema.

## Using These Scripts

To use any of these scripts, run them from the root directory of the project using either npm or bun. For example:

```bash
npm run dev
# or
bun dev
```

Most scripts can be combined with additional flags as needed. For example:

```bash
npm run test -- --coverage
# or
bun test --coverage
```

This will run the tests and also generate a coverage report.
