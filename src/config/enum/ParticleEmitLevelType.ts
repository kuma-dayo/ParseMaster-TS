import { EnumDefault } from "."

enum types {
  ExtremeLow = 0,
  Low = 1,
  Middle = 2,
  High = 3,
}

export const ParticleEmitLevelType: EnumDefault = {
  __signed: true,
  types: types,
}
