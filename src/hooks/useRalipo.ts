import { useEffect, useState } from 'react'
import { RalipoObjectWithoutInitialize } from '../@types'
import { handleRalipoInit } from '../actions/ralipo-actions'
import useScript from '../lib/scripts'

type RalipoType = {
  apiKey: string
  showLauncher?: boolean
  showWidget?: boolean
}

export default function useRalipo(props: RalipoType) {
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
      console.log(window.ralipo)
      init().catch(console.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded])

  return {
    ralipoObject,
  }
}
