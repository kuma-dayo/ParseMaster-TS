import { EnumDefault } from "."

enum types {
  Normal = 0,
  Cold = 1,
  Hot = 2,
  ColdMonster = 3,
  HotMonster = 4,
  SeaMist = 5,
  HeroCourse = 6,
  SeaMistSurrounding = 7,
  TatariRegion = 8,
  TransClimate = 9,
  SeiraiStorm = 10,
  TsurumiMist = 11,
  TsurumiThunder = 12,
  TsurumiRegionalMist = 13,
  Count = 14,
}

export const JsonClimateType: EnumDefault = {
  __signed: true,
  types: types,
}
