import { EnumDefault } from "."

enum types {
  None = 0,
  Climate = 1,
  Other = 2,
  All = 3,
}

export const ClimateSourceType: EnumDefault = {
  __signed: true,
  types: types,
}
