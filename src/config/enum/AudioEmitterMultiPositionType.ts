import { EnumDefault } from "."

enum types {
  MultiSources = 0,
  MultiDirections = 1,
}

export const AudioEmitterMultiPositionType: EnumDefault = {
  __signed: true,
  types: types,
}
