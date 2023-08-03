import { EnumDefault } from "."

enum types {
  ROGUELIKE_CARD_TPYE_NONE = 0,
  ROGUELIKE_CARD_TPYE_SSR = 1,
  ROGUELIKE_CARD_TPYE_SR = 2,
  ROGUELIKE_CARD_TPYE_R = 3,
}

export const RoguelikeCardType: EnumDefault = {
  __signed: true,
  types: types,
}
