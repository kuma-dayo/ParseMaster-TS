import { EnumDefault } from "."

enum types {
  CRYSTAL_LINK_DIFFICULTY_EASY = 0,
  CRYSTAL_LINK_DIFFICULTY_MID = 1,
  CRYSTAL_LINK_DIFFICULTY_HARD = 2,
}

export const CrystalLinkDifficultyType: EnumDefault = {
  __signed: true,
  types: types,
}
