import { ConfigDefault } from ".."

export const DoActionBySelfModifierElementDurabilityRatioMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    uniqueModifierName: "string",
    valueSteps: "DynamicFloat[]",
    actionQueues: "ConfigAbilityAction[][]",
  },
}
