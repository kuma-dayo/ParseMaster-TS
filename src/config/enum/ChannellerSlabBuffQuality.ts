import { EnumDefault } from "."

enum types {
  CHANNELLER_SLAB_BUFF_QUALITY_NONE = 0,
  CHANNELLER_SLAB_BUFF_QUALITY_GREEN = 1,
  CHANNELLER_SLAB_BUFF_QUALITY_BLUE = 2,
  CHANNELLER_SLAB_BUFF_QUALITY_PURPLE = 3,
  CHANNELLER_SLAB_BUFF_QUALITY_ORANGE = 4,
}

export const ChannellerSlabBuffQuality: EnumDefault = {
  __signed: true,
  types: types,
}
