import { ConfigDefault } from ".."

export const ConfigAISpacialProbeSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAISpacialProbeData",
    specification: "map<vint,ConfigAISpacialProbeData>",
  },
}
