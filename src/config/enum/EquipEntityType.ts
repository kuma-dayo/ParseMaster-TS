import { EnumDefault } from "."

enum types {
  None = 0,
  SwordOneHand = 1,
  CrossBow = 2,
  SmallShield = 3,
  Spear = 4,
  Catalyst = 5,
  Bow = 6,
  Claymore = 7,
  Pole = 8,
}

export const EquipEntityType: EnumDefault = {
  __signed: true,
  types: types,
}