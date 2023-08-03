import { EnumDefault } from "."

enum types {
  FORWARD = 0,
  BACKWARD = 1,
  LEFT = 2,
  RIGHT = 3,
}

export const MoveToDirectionType: EnumDefault = {
  __signed: true,
  types: types,
}
