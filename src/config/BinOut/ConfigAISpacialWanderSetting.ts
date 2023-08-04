import { ConfigDefault } from ".."

export const ConfigAISpacialWanderSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAISpacialWanderData",
    specification: "map<vint,ConfigAISpacialWanderData>",
  },
}
