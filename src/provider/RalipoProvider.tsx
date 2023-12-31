import React, { FC, createContext, useEffect, useState } from 'react'
import { RalipoObject, RalipoObjectWithoutInitialize, RalipoProviderProps } from '../@types'
import { handleRalipoInit } from '../actions/ralipo-actions'
import useScript from '../lib/scripts'

export const RalipoContext = createContext<Partial<RalipoObject> | undefined>(undefined)

function useInitApp(props: { showWidget?: boolean; showLauncher?: boolean; apiKey: string }) {
  const { apiKey, showLauncher, showWidget } = props
  const [scriptLoaded, scriptError] = useScript()
  const [ralipoObject, setRalipoObject] = useState<RalipoObjectWithoutInitialize | undefined>(undefined)

  async function init() {
    if (scriptError) {
      throw new Error('Unable to load Ralipo inline script')
    }

    if (window && window.ralipo) {
      const { initialize, ...rest } = handleRalipoInit()
      initialize(apiKey, { showLauncher, showWidget })
      setRalipoObject({ ...rest })
    } else {
      // Retry after 1 second
      setTimeout(init, 1000)
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Unable to load Ralipo inline script')
    }
  }, [scriptError])

  useEffect(() => {
    if (scriptLoaded) {
      init().catch(console.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded])

  return {
    ralipoObject,
  }
}

export const RalipoProvider: FC<RalipoProviderProps> = ({ showWidget, showLauncher, children, apiKey }) => {
  const { ralipoObject } = useInitApp({
    apiKey,
    showLauncher,
    showWidget,
  })
  return <RalipoContext.Provider value={{ ...ralipoObject }}>{children}</RalipoContext.Provider>
}
