import { EnumDefault } from "."

enum types {
  BLESSING_SCAN_TYPE_NONE = 0,
  BLESSING_SCAN_TYPE_MONSTER = 1,
  BLESSING_SCAN_TYPE_GATHER = 2,
}

export const BlessingScanType: EnumDefault = {
  __signed: true,
  types: types,
}
