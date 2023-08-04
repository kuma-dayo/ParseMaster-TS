import { ConfigDefault } from ".."

export const AttachModifierToSelfGlobalValueMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    globalValueTarget: "AbilityTargetting",
    globalValueKey: "string",
    addAction: "AddActionType",
    defaultGlobalValueOnCreate: "DynamicFloat",
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
    actionQueues: "ConfigAbilityAction[][]",
    removeAppliedModifier: "bool",
  },
}
