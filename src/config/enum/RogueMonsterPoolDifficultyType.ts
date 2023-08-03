import { EnumDefault } from "."

enum types {
  ROGUE_MONSTER_DIFFICULTY_NORMAL = 0,
  ROGUE_MONSTER_DIFFICULTY_ELITE_EASY = 1,
  ROGUE_MONSTER_DIFFICULTY_ELITE_HARD = 2,
  ROGUE_MONSTER_DIFFICULTY_BOSS = 3,
}

export const RogueMonsterPoolDifficultyType: EnumDefault = {
  __signed: true,
  types: types,
}
