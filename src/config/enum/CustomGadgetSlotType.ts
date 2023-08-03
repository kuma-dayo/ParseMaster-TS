import { EnumDefault } from "."

enum types {
  CUSTOMGADGET_SLOT_TYPE_NONE = 0,
  CUSTOMGADGET_SLOT_TYPE_FURNITURE = 1,
}

export const CustomGadgetSlotType: EnumDefault = {
  __signed: true,
  types: types,
}
