import { EnumDefault } from "."

enum types {
  NONE = 0,
  WITHOUT_BLINK = 1,
  WITH_BLINK = 2,
}

export const EmoBackType: EnumDefault = {
  __signed: true,
  types: types,
}
