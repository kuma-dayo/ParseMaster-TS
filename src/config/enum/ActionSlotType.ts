import { EnumDefault } from "."

enum types {
  SlotAM = 0,
  Slot1 = 1,
  Slot2 = 2,
  Slot3 = 3,
  Slot4 = 4,
  Slot5 = 5,
  SlotLeft = 6,
  SlotCharge = 7,
  SlotQuickUse = 8,
}

export const ActionSlotType: EnumDefault = {
  __signed: true,
  types: types,
}