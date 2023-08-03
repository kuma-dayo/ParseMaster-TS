import { EnumDefault } from "."

enum types {
  FIREWORKS_REFORM_SKILL_NONE = 0,
  FIREWORKS_REFORM_SKILL_GENERAL = 1,
  FIREWORKS_REFORM_SKILL_INSTABLE = 2,
  FIREWORKS_REFORM_SKILL_ADJACENT = 3,
}

export const FireworksReformSkillType: EnumDefault = {
  __signed: true,
  types: types,
}
