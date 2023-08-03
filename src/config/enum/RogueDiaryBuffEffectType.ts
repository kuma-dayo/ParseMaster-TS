import { EnumDefault } from "."

enum types {
  ROGUE_DIARY_BUFF_EFFECT_NONE = 0,
  ROGUE_DIARY_BUFF_EFFECT_ABILITY = 1,
  ROGUE_DIARY_BUFF_EFFECT_UNLOCK_TALENT = 2,
}

export const RogueDiaryBuffEffectType: EnumDefault = {
  __signed: true,
  types: types,
}