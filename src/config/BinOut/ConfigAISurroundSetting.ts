import { ConfigDefault } from "../"

export const ConfigAISurroundSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAISurroundData",
    specification: "map<vint,ConfigAISurroundData>",
  },
}
