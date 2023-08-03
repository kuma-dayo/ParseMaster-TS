import { ConfigDefault } from "../"

export const ConfigPerfBoolItem: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigPerfItemBase",
  Fields: {
    deviceSpecItem: "map<string,bool>",
    itemOptionMap: "map<string,ConfigPerfBoolItemOptionArrayInfo>",
    overrideMap: "map<string,ConfigPerfBoolItemOverrideInfo>",
  },
}
