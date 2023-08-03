import { EnumDefault } from "."

enum types {
  None = 0,
  SMAA = 3,
  TAA = 4,
}

export const AntialiasingMethod: EnumDefault = {
  __signed: true,
  types: types,
}
