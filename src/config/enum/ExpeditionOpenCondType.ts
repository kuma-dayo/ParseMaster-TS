import { EnumDefault } from "."

enum types {
  EXP_OPEN_COND_LEVEL = 0,
  EXP_OPEN_COND_POINT = 1,
  EXP_OPEN_COND_QUEST = 2,
}

export const ExpeditionOpenCondType: EnumDefault = {
  __signed: true,
  types: types,
}