import { EnumDefault } from "."

enum types {
  Global = 0,
  Local = 1,
}

export const AudioScope: EnumDefault = {
  __signed: true,
  types: types,
}
