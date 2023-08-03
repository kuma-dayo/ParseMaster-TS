import { EnumDefault } from "."

enum types {
  Min = 0,
  Low = 1,
  Middle = 2,
  High = 4,
  Max = 10,
}

export const PerfCostRatioGrade: EnumDefault = {
  __signed: true,
  types: types,
}
