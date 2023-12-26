/* eslint-disable @typescript-eslint/no-explicit-any */
export type InitProps = {
  showLauncher?: boolean
  showWidget?: boolean
}

export type RalipoObject = {
  showLauncher: (e: string) => void
  showCampaignsData: () => any
  setCustomData: (e: string, t: any) => any
  openWidget: (e: string, t: any) => Promise<any>
  initialize: (e: string, t: InitProps) => Promise<any>
  hideLauncher: (e: string) => void
}

export type RalipoObjectWithoutInitialize = Partial<
  Pick<RalipoObject, 'showLauncher' | 'hideLauncher' | 'openWidget' | 'setCustomData' | 'showCampaignsData'>
>

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ralipo: RalipoObject
    ralipoLoaded: boolean
  }
}
