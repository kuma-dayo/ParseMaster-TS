import { ConfigDefault } from "../"

export const AttachModifierToSelfGlobalValueNoInitMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    globalValueKey: "string",
    addAction: "AddActionType",
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
    actionQueues: "ConfigAbilityAction[][]",
    removeAppliedModifier: "bool",
  },
}
