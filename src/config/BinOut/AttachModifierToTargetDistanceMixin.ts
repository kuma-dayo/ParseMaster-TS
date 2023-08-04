import { ConfigDefault } from ".."

export const AttachModifierToTargetDistanceMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    targetIDs: "vuint[]",
    byserver: "bool",
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
    removeAppliedModifier: "bool",
    BlendParam: "string",
    BlendDistance: "DynamicFloat[]",
    effectPattern: "string",
  },
}
