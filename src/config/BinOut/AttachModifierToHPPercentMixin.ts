import { ConfigDefault } from ".."

export const AttachModifierToHPPercentMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
  },
}
