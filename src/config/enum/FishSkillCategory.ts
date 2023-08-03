import { EnumDefault } from "."

enum types {
  FISH_SKILL_CATEGORY_NONE = 0,
  FISH_SKILL_CATEGORY_FORCE = 1,
  FISH_SKILL_CATEGORY_BONUS = 2,
}

export const FishSkillCategory: EnumDefault = {
  __signed: true,
  types: types,
}
