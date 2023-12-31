//Auto Generated by ConfigParser

import { EnumDefault } from "."

enum types {
  Any = 0,
  ButtonPressed = 1,
  ButtonReleased = 2,
  ButtonPressing = 3,
  ButtonUnpressing = 4,
  ButtonLongPressed = 5,
  ButtonLongPressing = 6,
  ButtonLongReleased = 7,
  ButtonShortPressUp = 8,
  ButtonRepeating = 9,
  AxisActive = 10,
  NegativeButtonRepeating = 11,
}

export const ActionEventType: EnumDefault = {
  __signed: true,
  types: types,
}
