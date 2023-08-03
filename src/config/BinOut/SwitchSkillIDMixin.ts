import { ConfigDefault } from "../"

export const SwitchSkillIDMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    priority: "SwitchSkillPriority",
    skillIndex: "vint",
    skillID: "vuint",
    fromSkillID: "vuint",
    toSkillID: "vuint",
  },
}