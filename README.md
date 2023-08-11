# React Component Library

Template for quickly setting up a React component library with:

- Storybook
- Typescript
- Vite
- TailwindCSS
- Atomic design

## Installing

`pnpm install`

## Running

This will run the storybook server on port 6006

`pnpm dev`

## Building

This will build the library to the `dist` folder

`pnpm build`

## Consuming

```tsx
// import the tailwind styles
import "react-component-library/dist/styles/global.css"

// import the components
import { Button } from 'react-component-library'
```