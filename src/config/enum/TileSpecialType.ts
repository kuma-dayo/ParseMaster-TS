import { EnumDefault } from "."

enum types {
  None = 0,
  WorldTypeBegin = 1,
  WorldGrass = 2,
  WorldWater = 3,
  WorldElectricWater = 4,
  WorldTypeEnd = 5,
  COUNT = 6,
}

export const TileSpecialType: EnumDefault = {
  __signed: true,
  types: types,
}