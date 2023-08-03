import { EnumDefault } from "."

enum types {
  GroundOnly = 0,
  WaterOnly = 1,
  Both = 2,
}

export const TargetAltitudeType: EnumDefault = {
  __signed: true,
  types: types,
}