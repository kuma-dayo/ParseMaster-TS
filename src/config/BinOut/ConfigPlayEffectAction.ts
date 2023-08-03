import { ConfigDefault } from "../"

export const ConfigPlayEffectAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    effectIndex: "string",
    patternName: "string",
    pos: "Vector",
    euler: "Vector",
    scale: "Vector",
    isLoop: "bool",
    attachToEntity: "bool",
    isRemove: "bool",
    attachGadgetId: "vuint",
    attachGadgetSubKey: "vuint",
  },
}
