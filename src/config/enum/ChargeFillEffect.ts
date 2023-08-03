import { EnumDefault } from "."

enum types {
  CHARING_FILL_POSITIVE = 0,
  CHARING_FILL_NEGATIVE = 1,
  CHARING_FILL_NONE = 2,
}

export const ChargeFillEffect: EnumDefault = {
  __signed: true,
  types: types,
}
