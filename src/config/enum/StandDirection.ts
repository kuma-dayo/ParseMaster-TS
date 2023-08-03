import { EnumDefault } from "."

enum types {
  LEFT = 0,
  FRONT = 1,
  RIGHT = 2,
}

export const StandDirection: EnumDefault = {
  __signed: true,
  types: types,
}