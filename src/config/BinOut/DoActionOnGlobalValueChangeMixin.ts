import { ConfigDefault } from "../"

export const DoActionOnGlobalValueChangeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    globalValueKey: "string",
    actions: "ConfigAbilityAction[]",
    isDelay: "bool",
    delayTime: "float",
  },
}