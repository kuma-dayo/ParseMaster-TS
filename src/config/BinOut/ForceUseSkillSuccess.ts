import { ConfigDefault } from ".."

export const ForceUseSkillSuccess: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    skillID: "vuint",
    type: "UseSkillType",
    immediately: "bool",
  },
}
