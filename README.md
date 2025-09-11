# glamp-frontend-react-app

## Description

This is a frontend application built with React.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.
2. Install the dependencies:
    ```bash
    yarn install
    ```
> Yarn is required to install dependencies correctly, and in this case it does it better than npm
## Running the Application

### Development Mode

To run the application in development mode:
```bash
yarn dev
```
This will open the application in your default browser at [http://localhost:3000](http://localhost:3000).

### Production Build

To build the application for production:
```bash
yarn build
```
This will create an optimized build in the `dist` directory.

### Preview Built Application

To run a preview of the built application:
```bash
yarn preview
```
This will open the application in your default browser at [http://localhost:3000](http://localhost:3000).

## Linting and Formatting

### Linting

To run the linter:
```bash
yarn lint
```

### Formatting

To run Prettier for code formatting:

```bash
yarn format
```

## Environment Files

### .env

This is the default environment file. Variables defined here are used in all environments unless overwritten.

### .env.development

Environment variables for the development environment. Overrides the default .env values if present.

### .env.development.local.example

Example file for local development. Copy this file to .env.development.local and adjust the values as necessary.

### .env.production

Environment variables for the production environment. Overrides the default .env values if present.

To run Prettier for code formatting:
```bash
yarn format
```

## Scripts

- `yarn dev` - Runs the application in development mode.
- `yarn build` - Creates a production build.
- `yarn lint` - Runs ESLint to check the code.
- `yarn format` - Runs Prettier to format the code.
- `yarn preview` - Runs a preview of the built application.


### Adaptive
Use react-responsive-tool

mobile - breakpoint is "lg";


