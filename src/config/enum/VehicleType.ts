import { EnumDefault } from "."

enum types {
  None = 0,
  Ship = 1,
  Skiff = 2,
}

export const VehicleType: EnumDefault = {
  __signed: true,
  types: types,
}
