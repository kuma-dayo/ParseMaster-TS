import { EnumDefault } from "."

enum types {
  NEVER_TOKEN = 0,
  FRAME_DELAY_TOKEN = 1,
  FRAME_CANCEL_TOKEN = 2,
}

export const ActionTokenType: EnumDefault = {
  __signed: true,
  types: types,
}
