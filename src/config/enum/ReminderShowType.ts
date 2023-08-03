import { EnumDefault } from "."

enum types {
  NONE = 0,
  TALK = 1,
  BUBBLE = 2,
}

export const ReminderShowType: EnumDefault = {
  __signed: true,
  types: types,
}
