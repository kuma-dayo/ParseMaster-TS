import { EnumDefault } from "."

enum types {
  SUMO_DIFFICULTY_EASY = 0,
  SUMO_DIFFICULTY_MID = 1,
  SUMO_DIFFICULTY_HARD = 2,
}

export const SumoDifficultyType: EnumDefault = {
  __signed: true,
  types: types,
}