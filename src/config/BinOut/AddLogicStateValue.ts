import { ConfigDefault } from ".."

export const AddLogicStateValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    logicStateName: "string",
    value: "DynamicFloat",
    useLimitRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}
