import { EnumDefault } from "."

enum types {
  COMPOUND_NONE = 0,
  COMPOUND_COOK = 1,
  COMPOUND_PLACEHOLDER_2 = 2,
  COMPOUND_RANDOM_COOK = 3,
}

export const CompoundType: EnumDefault = {
  __signed: true,
  types: types,
}
