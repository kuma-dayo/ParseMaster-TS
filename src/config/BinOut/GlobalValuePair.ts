import { ConfigDefault } from ".."

export const GlobalValuePair: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    key: "string",
    value: "DynamicFloat",
    useLimitRange: "bool",
    randomInRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}
