import { ConfigDefault } from "../"

export const ModifySkillCost: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigTalentMixin",
  Fields: {
    skillID: "vuint",
    costDelta: "float",
    costRatio: "float",
  },
}
