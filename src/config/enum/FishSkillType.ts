import { EnumDefault } from "."

enum types {
  FISH_SKILL_NONE = 0,
  FISH_SKILL_HP = 1,
  FISH_SKILL_FORCE = 2,
  FISH_SKILL_TIME = 3,
}

export const FishSkillType: EnumDefault = {
  __signed: true,
  types: types,
}
