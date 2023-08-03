import { EnumDefault } from "."

enum types {
  OFFERING_MAX_LEVEL_LIMIT_NONE = 0,
  OFFERING_MAX_LEVEL_LIMIT_NORMAL = 1,
  OFFERING_MAX_LEVEL_LIMIT_MICHIAE = 2,
}

export const OfferingMaxLevelLimitType: EnumDefault = {
  __signed: true,
  types: types,
}
