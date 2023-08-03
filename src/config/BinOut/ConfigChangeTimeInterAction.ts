import { ConfigDefault } from "../"

export const ConfigChangeTimeInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    toTime: "float",
    extraDay: "vuint",
    force: "bool",
    useFade: "bool",
    fadeSpeed: "float",
  },
}
