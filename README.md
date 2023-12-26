# Ralipo React

Official React Package for React Applications

## Installation

```bash
npm install sauce-react
# or
yarn add  sauce-react
# or
pnpm install  sauce-react
```

This package is compatible with React v18+ and works with ReactDOM

## Quick Start

Wrap Your entire project or the component with the raplipo provider, pass the apiKey prop which is required and optional props are showLauncher and showWidget.

```tsx
import React from 'react'
import { RalipoProvider } from 'sauce-react'

function App() {
  return (
    <RalipoProvider showLauncher={true} showWidget={false} apiKey='your-api-key'>
      <div>
        <h1>Ralipo React</h1>
      </div>
    </RalipoProvider>
  )
}

export default App
```

## Using the Hook

In order to use the useRalipo Hook, make sure the component parent is wrapped with the Ralipo Provider.

```tsx
import React from 'react'
import { useRalipo } from 'sauce-react'

function SomeComponent() {
  const { setCustomData, showCampaignsData } = useRalipo()
  return <div>Some component using Hooks</div>
}

export default SomeComponent
```
