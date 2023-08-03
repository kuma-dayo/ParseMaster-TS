import { EnumDefault } from "."

enum types {
  None = 0,
  Bartender = 1,
  Count = 2,
}

export const AnimeGroupType: EnumDefault = {
  __signed: true,
  types: types,
}
