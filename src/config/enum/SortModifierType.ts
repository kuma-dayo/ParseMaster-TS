import { EnumDefault } from "."

enum types {
  None = 0,
  Priority = 1,
  DurabilityAsc = 2,
  DurabilityDes = 3,
  All = 4,
}

export const SortModifierType: EnumDefault = {
  __signed: true,
  types: types,
}