import { EnumDefault } from "."

enum types {
  GIVING_METHOD_NONE = 0,
  GIVING_METHOD_EXACT = 1,
  GIVING_METHOD_GROUP = 2,
  GIVING_METHOD_VAGUE_GROUP = 3,
  GIVING_METHOD_ANY_NO_FINISH = 4,
}

export const GivingMethod: EnumDefault = {
  __signed: true,
  types: types,
}
