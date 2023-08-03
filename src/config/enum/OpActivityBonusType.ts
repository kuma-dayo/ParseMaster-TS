import { EnumDefault } from "."

enum types {
  TYPE_NONE = 0,
  TYPE_DAILY = 1,
  TYPE_SUM = 2,
}

export const OpActivityBonusType: EnumDefault = {
  __signed: true,
  types: types,
}