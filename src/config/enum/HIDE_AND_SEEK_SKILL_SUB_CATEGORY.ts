import { EnumDefault } from "."

enum types {
  HIDE_AND_SEEK_SKILL_SUB_CATEGORY_NONE = 0,
  HIDE_AND_SEEK_SKILL_SUB_CATEGORY_COMMON = 1,
  HIDE_AND_SEEK_SKILL_SUB_CATEGORY_SKILL1 = 2,
  HIDE_AND_SEEK_SKILL_SUB_CATEGORY_SKILL2 = 3,
}

export const HIDE_AND_SEEK_SKILL_SUB_CATEGORY: EnumDefault = {
  __signed: true,
  types: types,
}
