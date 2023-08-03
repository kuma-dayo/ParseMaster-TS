import { EnumDefault } from "."

enum types {
  XZ = 0,
  Y = 1,
  XYZ = 2,
}

export const TargetPosToSelfPosType: EnumDefault = {
  __signed: true,
  types: types,
}