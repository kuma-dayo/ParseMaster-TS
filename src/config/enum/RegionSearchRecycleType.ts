import { EnumDefault } from "."

enum types {
  REGION_SEARCH_RECYCLE_NONE = 0,
  REGION_SEARCH_RECYCLE_PROGRESS = 1,
}

export const RegionSearchRecycleType: EnumDefault = {
  __signed: true,
  types: types,
}