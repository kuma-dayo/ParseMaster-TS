import { ConfigDefault } from ".."

export const AttachModifierToGlobalValueMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    globalValueTarget: "AbilityTargetting",
    otherTargets: "SelectTargets",
    globalValueKey: "string",
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
    actionQueues: "ConfigAbilityAction[][]",
    removeAppliedModifier: "bool",
    removeAppliedModifierTargetDisappear: "bool",
    removeAppliedModifierClearGlobalValue: "bool",
    removeModifierByAttach: "bool",
    targetRegisterType: "TargetRegisterType",
    notRemoveModifierWhenEntityNotSync: "bool",
  },
}
