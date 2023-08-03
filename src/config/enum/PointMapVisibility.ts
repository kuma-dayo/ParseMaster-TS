import { EnumDefault } from "."

enum types {
  Normal = 0,
  OnUnlocked = 1,
  Never = 2,
}

export const PointMapVisibility: EnumDefault = {
  __signed: true,
  types: types,
}
