import { EnumDefault } from "."

enum types {
  ENTRANCE_NORMAL = 0,
  ENTRANCE_RECHARGE = 1,
  ENTRANCE_TAB = 2,
}

export const ShopmallEntranceType: EnumDefault = {
  __signed: true,
  types: types,
}
