import React from 'react'
import { RalipoProvider } from './provider/RalipoProvider'

function App() {
  return (
    <RalipoProvider
      showLauncher={true}
      showWidget={false}
      apiKey='d685a15e-cee3-4a26-b18e-af608d2258d9|6oabNTzDGGYO3bB3'
    >
      <div>
        <h1>Ralipo React</h1>
      </div>
    </RalipoProvider>
  )
}

export default App
