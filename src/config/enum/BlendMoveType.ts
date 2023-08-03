import { EnumDefault } from "."

enum types {
  None = 0,
  BlendMove = 1,
  BlendMove3D = 2,
}

export const BlendMoveType: EnumDefault = {
  __signed: true,
  types: types,
}
