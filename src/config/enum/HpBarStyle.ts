import { EnumDefault } from "."

enum types {
  Auto = 0,
  Elite = 1,
  Boss = 2,
  Friendly = 3,
  ElementCharge = 4,
  BossCompress = 5,
}

export const HpBarStyle: EnumDefault = {
  __signed: true,
  types: types,
}
