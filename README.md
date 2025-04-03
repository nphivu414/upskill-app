# Upskills

An interactive learning platform with web and mobile tutorials focused on modern software development.

## Features

- Interactive coding tutorials with step-by-step instructions
- Web and mobile app interfaces
- Rich code examples with syntax highlighting

## Tech Stack

- **Frontend:** React, Next.js
- **UI Libraries:** 
  - @heroui/react - Core UI components
  - Framer Motion - Animations
  - Lucide React - Icons
- **Development:**
  - Nx - Monorepo build system
  - TypeScript
  - Jest for testing
  - Storybook for UI development

## Project Structure

```
apps/
  ├── native-app/     # React Native mobile app (Not started yet)
  └── web-app/        # Next.js web application
libs/
  ├── shared/        # Shared utilities
  ├── ui/            # Core UI components
  ├── web-env/       # Web environment config
  ├── web-modules/   # Web feature modules
  └── tutorial-elements/ # Tutorial-specific components
```

## Getting Started

1. Install dependencies:
```sh
yarn install
```

2. Create an .env file based on `apps/web-app/.env.example`

3. Start development server:
```sh
yarn start
```

For web development specifically:
```sh
yarn start:web
```

For mobile development:
```sh
yarn start:native  # Start Metro bundler
yarn start:ios    # Run iOS app
yarn start:android # Run Android app
```

## Development Tools

- Start Storybook:
```sh
yarn storybook:start
```

- Run linting:
```sh
yarn lint:web
```

## Building

Build the web application:
```sh
yarn build:web
```

## License

MIT

## Author

Vu Nguyen
