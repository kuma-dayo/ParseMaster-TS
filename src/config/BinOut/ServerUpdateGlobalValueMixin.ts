import { ConfigDefault } from ".."

export const ServerUpdateGlobalValueMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    key: "string",
    useLimitRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}
