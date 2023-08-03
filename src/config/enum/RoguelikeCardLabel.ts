import { EnumDefault } from "."

enum types {
  ROGUELIKE_CARD_LABEL_COMBAT = 0,
  ROGUELIKE_CARD_LABEL_LEVEL = 1,
  ROGUELIKE_CARD_LABEL_RUNE = 2,
  ROGUELIKE_CARD_LABEL_EQUIPMENT = 3,
}

export const RoguelikeCardLabel: EnumDefault = {
  __signed: true,
  types: types,
}
