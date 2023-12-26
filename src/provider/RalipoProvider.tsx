import React from 'react'
import { FC, ReactNode, createContext } from 'react'
import { useRalipo } from '..'
import { RalipoObject } from '../@types'

export const RalipoContext = createContext<Partial<RalipoObject> | undefined>(undefined)

interface RalipoProviderProps {
  showWidget?: boolean
  showLauncher?: boolean
  apiKey: string
  children: ReactNode
}

export const RalipoProvider: FC<RalipoProviderProps> = ({ showWidget, showLauncher, children, apiKey }) => {
  const { ralipoObject } = useRalipo({
    apiKey,
    showLauncher,
    showWidget,
  })

  return <RalipoContext.Provider value={{ ...ralipoObject }}>{children}</RalipoContext.Provider>
}
