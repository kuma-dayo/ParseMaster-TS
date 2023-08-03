import { EnumDefault } from "."

enum types {
  NONE = 0,
  VEHICLE_SKIFF = 1,
}

export const InterActionTargetType: EnumDefault = {
  __signed: true,
  types: types,
}
