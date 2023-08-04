import { ConfigDefault } from ".."

export const ConfigSimpleUIShowInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    contextName: "string",
    isClose: "bool",
    param: "string",
    multiParam: "string[]",
  },
}
