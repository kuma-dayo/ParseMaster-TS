import { EnumDefault } from "."

enum types {
  Less = 0,
  Equal = 1,
  Greater = 2,
  LessOrEqual = 3,
  GreaterOrEqual = 4,
}

export const OrderingType: EnumDefault = {
  __signed: true,
  types: types,
}
