import { ConfigDefault } from "../"

export const SetAnimatorFloat: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    floatID: "string",
    value: "DynamicFloat",
    persistent: "bool",
    useRandomValue: "bool",
    randomValueMin: "DynamicFloat",
    randomValueMax: "DynamicFloat",
    transitionTime: "float",
  },
}