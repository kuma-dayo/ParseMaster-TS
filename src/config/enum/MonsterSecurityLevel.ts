import { EnumDefault } from "."

enum types {
  NORMAL = 0,
  ELITE = 1,
  BOSS = 2,
}

export const MonsterSecurityLevel: EnumDefault = {
  __signed: true,
  types: types,
}
