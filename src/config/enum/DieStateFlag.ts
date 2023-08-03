import { EnumDefault } from "."

enum types {
  None = 0,
  FrozenToDeath = 1,
  BurningToAshes = 2,
  DieFall = 3,
  DieDrawn = 4,
  DieAbyss = 5,
  Broken = 6,
  PetrifiedToDeath = 7,
}

export const DieStateFlag: EnumDefault = {
  __signed: true,
  types: types,
}
