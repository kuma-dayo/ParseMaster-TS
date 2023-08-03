import { EnumDefault } from "."

enum types {
  HIDE_AND_SEEK_SKILL_CATEGORY_NONE = 0,
  HIDE_AND_SEEK_SKILL_CATEGORY_HUNTER = 1,
  HIDE_AND_SEEK_SKILL_CATEGORY_PREY = 2,
  HIDE_AND_SEEK_SKILL_CATEGORY_GHOST = 3,
}

export const HIDE_AND_SEEK_SKILL_CATEGORY: EnumDefault = {
  __signed: true,
  types: types,
}
