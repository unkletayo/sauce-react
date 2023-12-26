import { useState, useEffect } from 'react'

const cachedScripts: string[] = []
interface IScriptResult {
  loaded: boolean
  error: boolean
}

export default function useScript(): boolean[] {
  const src =
    "https://ralipo-cdn.pages.dev/ralipo/ralipo.js"
  const [state, setState] = useState<IScriptResult>({
    loaded: false,
    error: false
  })

  useEffect(() => {
    if (cachedScripts.includes(src)) {
      setState({
        loaded: true,
        error: false
      })
    } else {
      cachedScripts.push(src)

      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.type = 'module'
      const onScriptLoad = (): void => {
        setState({
          loaded: true,
          error: false
        })
      }

      const onScriptError = (): void => {
        const index = cachedScripts.indexOf(src)
        if (index >= 0) cachedScripts.splice(index, 1)
        script.remove()
        setState({
          loaded: true,
          error: true
        })
      }

      script.addEventListener('load', onScriptLoad)
      script.addEventListener('complete', onScriptLoad)
      script.addEventListener('error', onScriptError)


      document.body.appendChild(script)

      return (): void => {
        script.removeEventListener('load', onScriptLoad)
        script.removeEventListener('error', onScriptError)
      }
    }
  }, [src])


  return [state.loaded, state.error]
}