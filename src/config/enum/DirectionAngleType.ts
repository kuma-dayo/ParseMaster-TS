import { EnumDefault } from "."

enum types {
  Free = 0,
  Horizontal = 1,
  Vertical = 2,
}

export const DirectionAngleType: EnumDefault = {
  __signed: true,
  types: types,
}
