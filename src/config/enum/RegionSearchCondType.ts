import { EnumDefault } from "."

enum types {
  REGION_SEARCH_COND_NONE = 0,
  REGION_SEARCH_COND_ACTIVITY_COND = 1,
  REGION_SEARCH_COND_FINISH_SEARCH = 2,
}

export const RegionSearchCondType: EnumDefault = {
  __signed: true,
  types: types,
}
