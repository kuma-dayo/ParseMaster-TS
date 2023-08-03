import { EnumDefault } from "."

enum types {
  Normal = 0,
  Normal_Reverse = 1,
  Stamina = 2,
  Line = 3,
  All = 4,
}

export const EraseBrickActivity_BrickType: EnumDefault = {
  __signed: true,
  types: types,
}
