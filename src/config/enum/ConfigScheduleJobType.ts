import { EnumDefault } from "."

enum types {
  Default = 0,
  LOSE = 1,
}

export const ConfigScheduleJobType: EnumDefault = {
  __signed: true,
  types: types,
}
