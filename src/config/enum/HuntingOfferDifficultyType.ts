import { EnumDefault } from "."

enum types {
  HUNTING_DIFFICULTY_EASY = 0,
  HUNTING_DIFFICULTY_MEDIUM = 1,
  HUNTING_DIFFICULTY_HARD = 2,
}

export const HuntingOfferDifficultyType: EnumDefault = {
  __signed: true,
  types: types,
}
