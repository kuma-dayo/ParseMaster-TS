import { ConfigDefault } from ".."

export const OnAvatarUseSkillMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onTriggerNormalAttack: "ConfigAbilityAction[]",
    onTriggerSkill: "ConfigAbilityAction[]",
    onTriggerUltimateSkill: "ConfigAbilityAction[]",
    useSkillStart: "bool",
    clearSkillIdDelay: "float",
  },
}
