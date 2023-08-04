import { ConfigDefault } from ".."

export const ConfigClimateCommon: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    length: "float",
    thresholdRatio: "float",
    debuffs: "map<JsonClimateType,vuint[]>",
    areaBuffs: "map<JsonClimateType,vuint[]>",
    miscs: "ConfigClimateMisc",
    perform: "ConfigClimatePerform",
    uiWarningRatio: "float",
    uiLenWeakIntensity: "float",
    uiLenLerpSpeed: "float",
  },
}
