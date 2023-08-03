import { EnumDefault } from "."

enum types {
  MECHANICUS_CARD_NONE = 0,
  MECHANICUS_CARD_BUFF = 1,
  MECHANICUS_CARD_CURSE = 2,
  MECHANICUS_CARD_CHALLENGE = 3,
}

export const MechanicusCardType: EnumDefault = {
  __signed: true,
  types: types,
}
