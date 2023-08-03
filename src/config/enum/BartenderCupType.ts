import { EnumDefault } from "."

enum types {
  BARTENDER_CUP_NONE = 0,
  BARTENDER_CUP_SMALL = 1,
  BARTENDER_CUP_MEDIUM = 2,
  BARTENDER_CUP_BIG = 3,
}

export const BartenderCupType: EnumDefault = {
  __signed: true,
  types: types,
}
