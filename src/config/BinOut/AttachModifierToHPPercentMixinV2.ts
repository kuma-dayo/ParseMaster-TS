import { ConfigDefault } from "../"

export const AttachModifierToHPPercentMixinV2: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
    delayFrameCount: "vuint",
    isNeedFlushOnRemoved: "bool",
  },
}
