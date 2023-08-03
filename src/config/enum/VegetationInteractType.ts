import { EnumDefault } from "."

enum types {
  DISPLACEMENT = 0,
  CUT_GRASS = 1,
  NONE = 2,
}

export const VegetationInteractType: EnumDefault = {
  __signed: true,
  types: types,
}
