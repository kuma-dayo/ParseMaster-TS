import { EnumDefault } from "."

enum types {
  BONUS_COMMON = 0,
  BONUS_XIANGLING = 1,
  BONUS_BABALA = 2,
  BONUS_KELAI = 3,
}

export const BonusActivityType: EnumDefault = {
  __signed: true,
  types: types,
}
