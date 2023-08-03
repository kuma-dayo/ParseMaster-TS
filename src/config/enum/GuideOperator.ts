import { EnumDefault } from "."

enum types {
  Equal = 0,
  Greater = 1,
  Less = 2,
  GreaterEqual = 3,
  LessEqual = 4,
}

export const GuideOperator: EnumDefault = {
  __signed: true,
  types: types,
}