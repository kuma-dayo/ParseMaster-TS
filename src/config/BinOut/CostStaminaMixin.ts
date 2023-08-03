import { ConfigDefault } from "../"

export const CostStaminaMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    costStaminaDelta: "DynamicFloat",
    costStaminaRatio: "DynamicFloat",
    onStaminaEmpty: "ConfigAbilityAction[]",
  },
}