import { EnumDefault } from "."

enum types {
  MONSTER_RARITY_NONE = 0,
  MONSTER_RARITY_SMALL_MONSTER = 1,
  MONSTER_RARITY_ELITE_MONSTER = 2,
  MONSTER_RARITY_BOSS_MONSTER = 3,
  MONSTER_RARITY_BIG_BOSS_MONSTER = 4,
  MONSTER_RARITY_SMALL_ENV_ANIMAL = 5,
}

export const MonsterRarityType: EnumDefault = {
  __signed: true,
  types: types,
}
