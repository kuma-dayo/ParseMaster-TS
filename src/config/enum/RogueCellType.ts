import { EnumDefault } from "."

enum types {
  ROGUE_CELL_TYPE_NONE = 0,
  ROGUE_CELL_TYPE_INIT = 1,
  ROGUE_CELL_TYPE_STORE = 2,
  ROGUE_CELL_TYPE_ELITE = 3,
  ROGUE_CELL_TYPE_NORMAL = 4,
  ROGUE_CELL_TYPE_SPRING = 5,
  ROGUE_CELL_TYPE_BOSS = 6,
  ROGUE_CELL_TYPE_CHEST = 7,
}

export const RogueCellType: EnumDefault = {
  __signed: true,
  types: types,
}
