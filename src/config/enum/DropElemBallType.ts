import { EnumDefault } from "."

enum types {
  LevelControl = 0,
  BigWorldOnly = 1,
  ForceDrop = 2,
}

export const DropElemBallType: EnumDefault = {
  __signed: true,
  types: types,
}
