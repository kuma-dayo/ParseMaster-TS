import { ConfigDefault } from ".."

export const ConfigAISpacialChaseSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAISpacialChaseData",
    specification: "map<vint,ConfigAISpacialChaseData>",
  },
}
