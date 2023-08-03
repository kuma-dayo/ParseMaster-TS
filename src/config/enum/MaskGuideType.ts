import { EnumDefault } from "."

enum types {
  Normal = 0,
  Black = 1,
  Transparent = 2,
}

export const MaskGuideType: EnumDefault = {
  __signed: true,
  types: types,
}
