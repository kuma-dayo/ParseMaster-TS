import { EnumDefault } from "."

enum types {
  Normal = 0,
  Red = 1,
  Blink = 2,
  Bubble = 3,
}

export const ButtonGuideType: EnumDefault = {
  __signed: true,
  types: types,
}
