import { EnumDefault } from "."

enum types {
  All = 0,
  Host = 1,
  Guest = 2,
}

export const GuideMultiPlayerMode: EnumDefault = {
  __signed: true,
  types: types,
}
