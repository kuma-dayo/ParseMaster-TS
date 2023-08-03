import { EnumDefault } from "."

enum types {
  COOK_BONUS_NONE = 0,
  COOK_BONUS_REPLACE = 1,
  COOK_BONUS_PROFICIENCY = 2,
}

export const CookBonusType: EnumDefault = {
  __signed: true,
  types: types,
}
