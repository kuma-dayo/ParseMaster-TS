import { EnumDefault } from "."

enum types {
  Default = 0,
  Furniture = 1,
  ActivityFlowerShelfBase = 2,
  ActivityWinterCampSnowmanBase = 3,
}

export const CustomGadgetType: EnumDefault = {
  __signed: true,
  types: types,
}