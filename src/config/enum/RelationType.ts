import { EnumDefault } from "."

enum types {
  Equal = 0,
  MoreThan = 1,
  LessAndEqual = 2,
  Between = 3,
  MoreThanAndEqual = 4,
  NoneOrEqual = 5,
}

export const RelationType: EnumDefault = {
  __signed: true,
  types: types,
}