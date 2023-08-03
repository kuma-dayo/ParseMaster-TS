import { EnumDefault } from "."

enum types {
  All = 0,
  Common = 1,
  Elite = 2,
  Boss = 3,
  EnumCount = 4,
}

export const MonsterCategory: EnumDefault = {
  __signed: true,
  types: types,
}
