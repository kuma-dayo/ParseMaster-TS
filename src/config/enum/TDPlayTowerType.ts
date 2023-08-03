import { EnumDefault } from "."

enum types {
  Default = 0,
  Fire = 1,
  Water = 2,
  Ice = 3,
  Wind = 4,
  Electric = 5,
  Simple = 6,
  Supporter = 7,
  Builder = 8,
  Mine = 9,
  Gate = 10,
}

export const TDPlayTowerType: EnumDefault = {
  __signed: true,
  types: types,
}
