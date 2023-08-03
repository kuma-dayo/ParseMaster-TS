import { EnumDefault } from "."

enum types {
  NONE = 0,
  ALWAYS = 1,
  AROUND = 2,
  CONDITION_ONLY = 3,
  OTHER = 4,
}

export const MarkVisibleType: EnumDefault = {
  __signed: true,
  types: types,
}
