import { EnumDefault } from "."

enum types {
  Force = 0,
  Min = 1,
  Max = 2,
}

export const PerfOptionOverrideRule: EnumDefault = {
  __signed: true,
  types: types,
}
