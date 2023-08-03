import { ConfigDefault } from "../"

export const ConfigAIExtractionSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIExtractionData",
    specification: "map<vint,ConfigAIExtractionData>",
  },
}