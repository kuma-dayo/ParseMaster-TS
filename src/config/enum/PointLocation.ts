import { EnumDefault } from "."

enum types {
  POINT_GROUND = 0,
  POINT_AIR = 1,
}

export const PointLocation: EnumDefault = {
  __signed: true,
  types: types,
}
