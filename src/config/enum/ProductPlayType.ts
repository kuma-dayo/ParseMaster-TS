import { EnumDefault } from "."

enum types {
  PRODUCT_PLAY_TYPE_NONE = 0,
  PRODUCT_PLAY_TYPE_BATTLE_PASS_NORMAL = 1,
  PRODUCT_PLAY_TYPE_BATTLE_PASS_EXTRA = 2,
  PRODUCT_PLAY_TYPE_BATTLE_PASS_UPGRADE = 3,
}

export const ProductPlayType: EnumDefault = {
  __signed: true,
  types: types,
}
