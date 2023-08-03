import { EnumDefault } from "."

enum types {
  DownToGroundOnlyInAir = 0,
  DownToGroundAndWaterOnlyInAir = 1,
  DownToGroundOnlyInWater = 2,
}

export const RaycastType: EnumDefault = {
  __signed: true,
  types: types,
}
