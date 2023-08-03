import { ConfigDefault } from "../"

export const AvatarChangeSkillMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    index: "vint",
    priority: "SwitchSkillPriority",
    aimSkillID: "vuint",
    jumpSkillID: "vuint",
    flySkillID: "vuint",
    changeOnAdd: "bool",
  },
}
