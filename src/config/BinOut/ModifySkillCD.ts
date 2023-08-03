import { ConfigDefault } from "../"

export const ModifySkillCD: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigTalentMixin",
  Fields: {
    skillID: "vuint",
    cdDelta: "float",
    cdRatio: "float",
  },
}
