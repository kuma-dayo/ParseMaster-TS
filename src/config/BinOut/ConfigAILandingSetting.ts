import { ConfigDefault } from ".."

export const ConfigAILandingSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAILandingData",
    specification: "map<vint,ConfigAILandingData>",
  },
}
