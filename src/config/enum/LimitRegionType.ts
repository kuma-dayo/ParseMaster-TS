import { EnumDefault } from "."

enum types {
  LIMIT_REGION_TYPE_NONE = 0,
  LIMIT_REGION_TYPE_BIGWORLD = 1,
  LIMIT_REGION_TYPE_ACTIVITY = 2,
  LIMIT_REGION_TYPE_HOMEWORLD = 3,
}

export const LimitRegionType: EnumDefault = {
  __signed: true,
  types: types,
}
