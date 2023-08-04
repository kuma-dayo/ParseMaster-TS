import { ConfigDefault } from ".."

export const ConfigPerfNumberItem: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigPerfItemBase",
  Fields: {
    deviceSpecItem: "map<string,float>",
    itemOptionMap: "map<string,ConfigPerfNumberItemOptionArrayInfo>",
    overrideMap: "map<string,ConfigPerfNumberItemOverrideInfo>",
  },
}
