import { ConfigDefault } from ".."

export const ModifySkillCDByModifierCountMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    targetType: "TargetType",
    modifierName: "string",
    skillID: "vuint",
    cdDelta: "DynamicFloat",
  },
}
