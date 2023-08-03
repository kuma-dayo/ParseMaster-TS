import { EnumDefault } from "."

enum types {
  Day = 0,
  Night = 1,
}

export const LevelDayTimeType: EnumDefault = {
  __signed: true,
  types: types,
}
