import { EnumDefault } from "."

enum types {
  LUNA_RITE_REGION_TYPE_INVALID = 0,
  LUNA_RITE_REGION_TYPE_LIYUE = 1,
  LUNA_RITE_REGION_TYPE_MENGDE = 2,
  LUNA_RITE_REGION_TYPE_DRAGONSPINE = 3,
}

export const LunaRiteRegionType: EnumDefault = {
  __signed: true,
  types: types,
}
