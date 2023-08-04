import { ConfigDefault } from ".."

export const AttachModifierToElementDurabilityMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
  },
}
