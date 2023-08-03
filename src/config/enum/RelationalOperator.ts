import { EnumDefault } from "."

enum types {
  Greater = 0,
  GreaterOrEqual = 1,
  Equal = 2,
  Lesser = 3,
  LesserOrEqual = 4,
}

export const RelationalOperator: EnumDefault = {
  __signed: true,
  types: types,
}
