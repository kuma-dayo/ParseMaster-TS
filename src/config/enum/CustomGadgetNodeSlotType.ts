import { EnumDefault } from "."

enum types {
  Default = 0,
  Furniture = 1,
}

export const CustomGadgetNodeSlotType: EnumDefault = {
  __signed: true,
  types: types,
}