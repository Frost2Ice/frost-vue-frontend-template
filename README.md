# Frost Vue Frontend Template

🎉 Welcome to the Frost Vue Frontend Template! 🚀

This template helps you kickstart your Vue 3 project with some cool features and tools. It's perfect for building modern web apps with Vue, Vue Router, and Vuetify.

## What's Inside?

- Vue 3 template, because we love the latest.
- Vue Router for all your routing needs.
- Pinia, a sleek and powerful store library for state management.
- Vuetify to make your app look stylish with minimal effort.
- Cypress for smooth end-to-end testing.
- Vitest with coverage-istanbul for solid unit testing with code coverage reports.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

## Scripts

- `dev`: Start the development server.
- `build`: Build your project for production.
- `test:unit`: Run unit tests with coverage reports.
- `test:unit-no-coverage`: Run unit tests without coverage reports.
- `test:e2e`: Run end-to-end tests with Cypress.
- `test:e2e:dev`: Open Cypress for end-to-end testing in development.
- `lint`: Lint your project's code.
- `format`: Format your code using Prettier.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```