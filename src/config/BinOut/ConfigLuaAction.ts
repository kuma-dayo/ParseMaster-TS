import { ConfigDefault } from "../"

export const ConfigLuaAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    invoke: "bool",
    invokeAlias: "string",
    invokeParam: "vuint",
  },
}
