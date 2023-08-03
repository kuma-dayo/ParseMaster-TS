import { EnumDefault } from "."

enum types {
  GATHER_SAVE_TYPE_NONE = 0,
  GATHER_SAVE_TYPE_LOW = 1,
  GATHER_SAVE_TYPE_MID = 2,
  GATHER_SAVE_TYPE_HIGH = 3,
  GATHER_SAVE_TYPE_OWN = 4,
}

export const GatherSaveType: EnumDefault = {
  __signed: true,
  types: types,
}
