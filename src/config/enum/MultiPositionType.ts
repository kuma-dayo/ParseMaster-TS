import { EnumDefault } from "."

enum types {
  SingleSource = 0,
  MultiSources = 1,
  MultiDirections = 2,
}

export const MultiPositionType: EnumDefault = {
  __signed: true,
  types: types,
}
