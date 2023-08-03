import { EnumDefault } from "."

enum types {
  BLOSSOM_REWARD_TYPE_DEFAULT = 0,
  BLOSSOM_REWARD_TYPE_TO_BAG = 1,
}

export const BlossomRewardType: EnumDefault = {
  __signed: true,
  types: types,
}
