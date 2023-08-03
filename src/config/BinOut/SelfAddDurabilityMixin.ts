import { ConfigDefault } from "../"

export const SelfAddDurabilityMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    value: "DynamicFloat",
    useLimitRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
    thinkInterval: "float",
  },
}
