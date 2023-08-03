import { ConfigDefault } from "../"

export const SetSkillCanUseInStateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    skillList: "vuint[]",
    stateList: "string[]",
  },
}
