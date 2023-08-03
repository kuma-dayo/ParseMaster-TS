import { EnumDefault } from "."

enum types {
  HUNTING_CLUE_ITERACT = 0,
  HUNTING_CLUE_MONSTER = 1,
  HUNTING_CLUE_GATHER = 2,
  HUNTING_CLUE_FINAL = 3,
}

export const HuntingCluePointType: EnumDefault = {
  __signed: true,
  types: types,
}