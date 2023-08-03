import { EnumDefault } from "."

enum types {
  NORMAL = 0,
  FIRST = 1,
  LAST = 2,
}

export const MarkLayerType: EnumDefault = {
  __signed: true,
  types: types,
}
