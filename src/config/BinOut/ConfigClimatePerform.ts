import { ConfigDefault } from "../"

export const ConfigClimatePerform: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    chance: "float",
    performTriggers: "map<JsonClimateType,string>",
  },
}