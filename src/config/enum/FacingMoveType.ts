import { EnumDefault } from "."

enum types {
  ForwardOnly = 0,
  ForwardBackward = 1,
  FourDirection = 2,
  LeftRight = 3,
  AirBlend = 4,
  AirBlend3D = 5,
}

export const FacingMoveType: EnumDefault = {
  __signed: true,
  types: types,
}
