import { EnumDefault } from "."

enum types {
  FreeRotation = 0,
  SingleAxisRotation = 1,
  SingleAxisTranslation = 2,
}

export const LanV2ProjectionMotionType: EnumDefault = {
  __signed: true,
  types: types,
}
