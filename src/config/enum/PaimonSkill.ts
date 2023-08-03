import { EnumDefault } from "."

enum types {
  Show = 1,
  Anger = 2,
  Domangic = 3,
  Guide = 4,
  Hope = 5,
  Wave = 6,
  ShowMove = 7,
  BlowNormal = 8,
  BlowContinuous = 9,
}

export const PaimonSkill: EnumDefault = {
  __signed: true,
  types: types,
}
