import { EnumDefault } from "."

enum types {
  MONSTER_NONE = 0,
  MONSTER_ORDINARY = 1,
  MONSTER_BOSS = 2,
  MONSTER_ENV_ANIMAL = 3,
  MONSTER_LITTLE_MONSTER = 4,
  MONSTER_FISH = 5,
  MONSTER_PARTNER = 6,
}

export const MonsterType: EnumDefault = {
  __signed: true,
  types: types,
}
