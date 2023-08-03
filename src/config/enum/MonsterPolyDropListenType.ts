import { EnumDefault } from "."

enum types {
  MONSTER_POLY_DROP_NONE = 0,
  MONSTER_POLY_DROP_GV = 1,
}

export const MonsterPolyDropListenType: EnumDefault = {
  __signed: true,
  types: types,
}
