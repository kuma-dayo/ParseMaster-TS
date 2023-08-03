import { EnumDefault } from "."

enum types {
  ROT_ANGLE_X = 0,
  ROT_ANGLE_Y = 1,
  ROT_ANGLE_Z = 2,
}

export const RotAngleType: EnumDefault = {
  __signed: true,
  types: types,
}