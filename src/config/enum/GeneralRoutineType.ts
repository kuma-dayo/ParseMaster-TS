import { EnumDefault } from "."

enum types {
  ROUTINE_TYPE_NONE = 0,
  ROUTINE_SNOW_MOUNTAIN = 1,
}

export const GeneralRoutineType: EnumDefault = {
  __signed: true,
  types: types,
}
