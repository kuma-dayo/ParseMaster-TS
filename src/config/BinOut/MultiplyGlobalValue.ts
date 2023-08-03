import { ConfigDefault } from "../"

export const MultiplyGlobalValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    value: "DynamicFloat",
    key: "string",
    useLimitRange: "bool",
    randomInRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}
