import { ConfigDefault } from ".."

export const ConfigBaseEquipController: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    sheathPoint: "string",
    dissolveSheathFadeDelay: "float",
    dissolveSheathFadeTime: "float",
    dissolveTakeFadeTime: "float",
    triggerToStates: "TriggerToStates[]",
  },
}
