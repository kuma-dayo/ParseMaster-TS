import { EnumDefault } from "."

enum types {
  AutoEnd = 0,
  End = 1,
  Begin = 2,
  Click = 3,
  Lasted = 4,
}

export const GuideLongPressType: EnumDefault = {
  __signed: true,
  types: types,
}
