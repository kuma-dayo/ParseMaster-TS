import { EnumDefault } from "."

enum types {
  Left_Up = 0,
  Left_Right = 1,
  Left_Down = 2,
  Left_Left = 3,
  Right_Up = 4,
  Right_Right = 5,
  Right_Down = 6,
  Right_Left = 7,
}

export const MusicKeyType: EnumDefault = {
  __signed: true,
  types: types,
}
