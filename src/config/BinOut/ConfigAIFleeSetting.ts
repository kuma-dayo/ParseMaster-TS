import { ConfigDefault } from ".."

export const ConfigAIFleeSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIFleeData",
    specification: "map<vint,ConfigAIFleeData>",
  },
}
