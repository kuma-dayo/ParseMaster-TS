import { EnumDefault } from "."

enum types {
  Circle = 0,
  Bar = 1,
}

export const SealProgressType: EnumDefault = {
  __signed: true,
  types: types,
}
