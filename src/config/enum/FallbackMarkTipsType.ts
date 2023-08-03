import { EnumDefault } from "."

enum types {
  Default = 0,
  Teleport = 1,
  Trace = 2,
}

export const FallbackMarkTipsType: EnumDefault = {
  __signed: true,
  types: types,
}
