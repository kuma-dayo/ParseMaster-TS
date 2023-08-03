import { EnumDefault } from "."

enum types {
  Default = 0,
  Reversed = 1,
  Nearest = 2,
  Random = 3,
  HigherScore = 4,
  LowHpRatio = 5,
}

export const SelectTargetsSortType: EnumDefault = {
  __signed: true,
  types: types,
}
