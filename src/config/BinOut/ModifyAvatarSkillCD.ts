import { ConfigDefault } from "../"

export const ModifyAvatarSkillCD: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    skillID: "vuint",
    skillSlot: "vuint[]",
    cdDelta: "DynamicFloat",
    cdRatio: "DynamicFloat",
  },
}
