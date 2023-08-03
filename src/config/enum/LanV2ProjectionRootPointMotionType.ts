import { EnumDefault } from "."

enum types {
  None = 0,
  FreeRotation = 1,
  SingleAxisRotation = 2,
}

export const LanV2ProjectionRootPointMotionType: EnumDefault = {
  __signed: true,
  types: types,
}
