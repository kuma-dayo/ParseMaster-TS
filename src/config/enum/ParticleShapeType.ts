import { EnumDefault } from "."

enum types {
  Volume = 0,
  Edge = 1,
  Shell = 2,
}

export const ParticleShapeType: EnumDefault = {
  __signed: true,
  types: types,
}
