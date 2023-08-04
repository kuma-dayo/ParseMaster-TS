import { ConfigDefault } from ".."

export const BySkillReady: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    skillID: "vuint",
    skillSlot: "vuint[]",
  },
}
