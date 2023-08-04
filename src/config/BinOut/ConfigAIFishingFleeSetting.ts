import { ConfigDefault } from ".."

export const ConfigAIFishingFleeSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIFishingFleeData",
    specification: "map<vint,ConfigAIFishingFleeData>",
  },
}
