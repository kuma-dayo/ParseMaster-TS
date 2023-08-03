import { EnumDefault } from "."

enum types {
  LOCK_FRAME = 0,
  BUBBLE = 1,
  NARRATION = 2,
  Other = 3,
}

export const DialogType: EnumDefault = {
  __signed: true,
  types: types,
}
