import { EnumDefault } from "."

enum types {
  Straight = 0,
  Snakelike = 1,
}

export const AIBasicMoveType: EnumDefault = {
  __signed: true,
  types: types,
}
