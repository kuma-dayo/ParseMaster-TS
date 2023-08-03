import { EnumDefault } from "."

enum types {
  TOWER_BUFF_LASTING_NONE = 0,
  TOWER_BUFF_LASTING_FLOOR = 1,
  TOWER_BUFF_LASTING_IMMEDIATE = 2,
  TOWER_BUFF_LASTING_LEVEL = 3,
}

export const TowerBuffLastingType: EnumDefault = {
  __signed: true,
  types: types,
}
