import { RalipoObject } from "../@types";

export const handleRalipoInit = () => {
  const { hideLauncher, initialize, openWidget, setCustomData, showCampaignsData, showLauncher }: RalipoObject = window.ralipo

  return {
    hideLauncher, initialize, openWidget, setCustomData, showCampaignsData, showLauncher
  }
};

