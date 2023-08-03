import { EnumDefault } from "."

enum types {
  exploration = 0,
  excavation = 1,
}

export const TreasureHuntMarkType: EnumDefault = {
  __signed: true,
  types: types,
}
