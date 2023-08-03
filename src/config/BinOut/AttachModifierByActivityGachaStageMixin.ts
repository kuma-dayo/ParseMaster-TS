import { ConfigDefault } from "../"

export const AttachModifierByActivityGachaStageMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stageIDs: "vuint[]",
    modifierNameSteps: "string[]",
  },
}
