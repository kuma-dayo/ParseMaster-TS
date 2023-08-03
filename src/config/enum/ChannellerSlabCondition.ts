import { EnumDefault } from "."

enum types {
  CHANNELLER_SLAB_CONDITION_NONE = 0,
  CHANNELLER_SLAB_CONDITION_LIMIT = 1,
  CHANNELLER_SLAB_CONDITION_CONFIG = 2,
  CHANNELLER_SLAB_LINEUP_REPLACE = 3,
}

export const ChannellerSlabCondition: EnumDefault = {
  __signed: true,
  types: types,
}
