import { EnumDefault } from "."

enum types {
  REUNION_RED_POINT_NONE = 0,
  REUNION_RED_POINT_SHOW = 1,
  REUNION_RED_POINT_HIDE = 2,
}

export const ReunionRedPointType: EnumDefault = {
  __signed: true,
  types: types,
}
