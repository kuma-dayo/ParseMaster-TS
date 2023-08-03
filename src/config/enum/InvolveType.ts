import { EnumDefault } from "."

enum types {
  INVOLVE_NONE = 0,
  INVOLVE_ONLY_SINGLE = 1,
  INVOLVE_SINGLE_MULTIPLE = 2,
  INVOLVE_DYNAMIC_MULTIPLE = 3,
  INVOLVE_ONLY_MULTIPLE = 4,
}

export const InvolveType: EnumDefault = {
  __signed: true,
  types: types,
}
