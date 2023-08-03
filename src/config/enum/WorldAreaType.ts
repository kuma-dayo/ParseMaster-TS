import { EnumDefault } from "."

enum types {
  LEVEL_NONE = 0,
  LEVEL_1 = 1,
  LEVEL_2 = 2,
  LEVEL_3 = 3,
  LEVEL_PLAY = 10,
}

export const WorldAreaType: EnumDefault = {
  __signed: true,
  types: types,
}