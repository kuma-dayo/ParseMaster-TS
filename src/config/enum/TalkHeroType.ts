import { EnumDefault } from "."

enum types {
  TALK_HERO_LOCAL = 0,
  TALK_HERO_MAIN = 1,
}

export const TalkHeroType: EnumDefault = {
  __signed: true,
  types: types,
}
