import { ConfigDefault } from ".."

export const ConfigPlatformPerfSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    perfRating: "ConfigPerfRatingSetting",
    perfOptions: "ConfigPerfSettingSet",
    playerCustomOptions: "string[]",
    applyGlobalPerfForGraphicSetting: "bool",
    costRatioGrade: "map<PerfCostRatioGrade,float>",
  },
}
