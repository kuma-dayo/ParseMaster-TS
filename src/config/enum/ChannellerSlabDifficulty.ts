import { EnumDefault } from "."

enum types {
  CHANNELLER_SLAB_DIFFICULTY_NONE = 0,
  CHANNELLER_SLAB_DIFFICULTY_PRIMER = 1,
  CHANNELLER_SLAB_DIFFICULTY_NORMAL = 2,
  CHANNELLER_SLAB_DIFFICULTY_HARD = 3,
  CHANNELLER_SLAB_DIFFICULTY_EXPERT = 4,
}

export const ChannellerSlabDifficulty: EnumDefault = {
  __signed: true,
  types: types,
}
