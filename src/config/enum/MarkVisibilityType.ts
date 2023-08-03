import { EnumDefault } from "."

enum types {
  None = 0,
  Invisible = 1,
  Around = 2,
  Always = 3,
}

export const MarkVisibilityType: EnumDefault = {
  __signed: true,
  types: types,
}
