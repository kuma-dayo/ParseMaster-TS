import { ConfigDefault } from "../"

export const AddChargeBarValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    value: "DynamicFloat",
    randomInRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}