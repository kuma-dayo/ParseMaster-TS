import { EnumDefault } from "."

enum types {
  VEHICLE_LIMIT_NONE = 0,
  VEHICLE_LIMIT_ONLY_VEHICLE = 1,
  VEHICLE_LIMIT_NOT_VEHICLE = 2,
}

export const VEHICLE_LIMIT_TYPE: EnumDefault = {
  __signed: true,
  types: types,
}
