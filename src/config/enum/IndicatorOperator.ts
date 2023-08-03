import { EnumDefault } from "."

enum types {
  And = 0,
  Or = 1,
}

export const IndicatorOperator: EnumDefault = {
  __signed: true,
  types: types,
}