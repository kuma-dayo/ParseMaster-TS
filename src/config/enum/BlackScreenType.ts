import { EnumDefault } from "."

enum types {
  TO_KEEP_FROM_BLACK = 0,
  TO_BLACK = 1,
  FROM_BLACK = 2,
  BLEND_OUT = 3,
  KEEP_BLACK = 4,
}

export const BlackScreenType: EnumDefault = {
  __signed: true,
  types: types,
}
