import { ConfigDefault } from "../"

export const ModifyExtraSkillCD: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    skillID: "vuint",
    cdDelta: "DynamicFloat",
    cdRatio: "DynamicFloat",
    cdMin: "DynamicFloat",
  },
}
