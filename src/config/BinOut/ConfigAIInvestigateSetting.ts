import { ConfigDefault } from ".."

export const ConfigAIInvestigateSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIInvestigateData",
    specification: "map<vint,ConfigAIInvestigateData>",
  },
}
