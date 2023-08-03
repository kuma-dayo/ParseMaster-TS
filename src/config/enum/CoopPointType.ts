import { EnumDefault } from "."

enum types {
  POINT_NONE = 0,
  POINT_START = 1,
  POINT_MIDDLE = 2,
  POINT_END = 3,
}

export const CoopPointType: EnumDefault = {
  __signed: true,
  types: types,
}
