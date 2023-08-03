import { ConfigDefault } from "../"

export const ConfigAISensing: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    enable: "bool",
    settings: "map<string,ConfigAISensingSetting>",
    templates: "map<string,map<string,string>>",
  },
}