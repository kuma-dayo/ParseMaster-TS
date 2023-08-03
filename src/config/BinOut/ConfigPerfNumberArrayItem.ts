import { ConfigDefault } from "../"

export const ConfigPerfNumberArrayItem: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigPerfItemBase",
  Fields: {
    deviceSpecItem: "map<string,float[]>",
    itemOptionMap: "map<string,ConfigPerfNumberArrayItemOptionArrayInfo>",
    overrideMap: "map<string,ConfigPerfNumberArrayItemOverrideInfo>",
  },
}
