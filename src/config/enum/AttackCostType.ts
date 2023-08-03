import { EnumDefault } from "."

enum types {
  Max = 0,
  Min = 1,
  Sum = 2,
}

export const AttackCostType: EnumDefault = {
  __signed: true,
  types: types,
}
