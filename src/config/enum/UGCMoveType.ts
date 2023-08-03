import { EnumDefault } from "."

enum types {
  Loop = 0,
  Reciprocate = 1,
  Once = 2,
}

export const UGCMoveType: EnumDefault = {
  __signed: true,
  types: types,
}
