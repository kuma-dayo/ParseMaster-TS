import { ConfigDefault } from "../"

export const ConfigSpecialElementViewAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    isOpen: "bool",
    effectColor: "ColorVector",
    effectRange: "float",
    noEffectAliasList: "string[]",
  },
}
