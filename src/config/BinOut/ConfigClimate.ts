import { ConfigDefault } from "../"

export const ConfigClimate: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    common: "ConfigClimateCommon",
    templates: "map<string,ConfigClimateInfoBase>",
  },
}