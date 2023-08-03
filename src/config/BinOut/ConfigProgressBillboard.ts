import { ConfigDefault } from "../"

export const ConfigProgressBillboard: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBillboard",
  Fields: {
    customKeyList: "string[]",
    maxValue: "float",
    prefabPluginName: "string",
    type: "ProgressBillboardType",
    needUpAnim: "bool",
  },
}
