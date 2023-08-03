import { EnumDefault } from "."

enum types {
  Click = 0,
  PressDown = 1,
  Charge = 2,
  Toggle = 3,
  LongPress = 4,
}

export const GuideButtonClick: EnumDefault = {
  __signed: true,
  types: types,
}