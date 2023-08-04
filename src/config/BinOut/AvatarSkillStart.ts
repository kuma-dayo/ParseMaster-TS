import { ConfigDefault } from ".."

export const AvatarSkillStart: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    skillID: "vuint",
    cdRatio: "DynamicFloat",
    costStaminaRatio: "DynamicFloat",
  },
}
