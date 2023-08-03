import { ConfigDefault } from "../"

export const ConfigAIWanderSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    threatLevelLimit: "vint[]",
    defaultSetting: "ConfigAIWanderData",
    specification: "map<vint,ConfigAIWanderData>",
  },
}