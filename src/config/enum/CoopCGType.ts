import { EnumDefault } from "."

enum types {
  CG_NONE = 0,
  CG_MALE = 1,
  CG_FEMALE = 2,
}

export const CoopCGType: EnumDefault = {
  __signed: true,
  types: types,
}