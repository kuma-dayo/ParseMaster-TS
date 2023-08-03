import { EnumDefault } from "."

enum types {
  PressDown = 0,
  Click = 1,
  Charge = 2,
}

export const GuideKeyClick: EnumDefault = {
  __signed: true,
  types: types,
}
