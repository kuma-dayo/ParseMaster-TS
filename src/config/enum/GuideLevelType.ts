import { EnumDefault } from "."

enum types {
  All = 0,
  NotDungeon = 1,
  OnlyBigWorld = 2,
}

export const GuideLevelType: EnumDefault = {
  __signed: true,
  types: types,
}
