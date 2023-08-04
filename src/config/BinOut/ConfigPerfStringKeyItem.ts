import { ConfigDefault } from ".."

export const ConfigPerfStringKeyItem: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigPerfItemBase",
  Fields: {
    deviceSpecItem: "map<string,string>",
    itemOptionMap: "map<string,ConfigPerfStringKeyItemOptionArrayInfo>",
    overrideMap: "map<string,ConfigPerfStringKeyItemOverrideInfo>",
  },
}
