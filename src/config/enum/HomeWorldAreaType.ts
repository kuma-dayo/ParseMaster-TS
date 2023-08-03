import { EnumDefault } from "."

enum types {
  InteriorArea = 0,
  ExteriorArea = 1,
}

export const HomeWorldAreaType: EnumDefault = {
  __signed: true,
  types: types,
}
