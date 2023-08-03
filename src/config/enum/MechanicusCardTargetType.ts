import { EnumDefault } from "."

enum types {
  MECHANICUS_CARD_TARGET_NONE = 0,
  MECHANICUS_CARD_TARGET_ALL = 1,
  MECHANICUS_CARD_TARGET_GADGETS = 2,
}

export const MechanicusCardTargetType: EnumDefault = {
  __signed: true,
  types: types,
}
