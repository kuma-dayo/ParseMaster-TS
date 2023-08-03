import { EnumDefault } from "."

enum types {
  EFFIGY_DIFFICULTY_NONE = 0,
  EFFIGY_DIFFICULTY_PRIMER = 1,
  EFFIGY_DIFFICULTY_NORMAL = 2,
  EFFIGY_DIFFICULTY_HARD = 3,
  EFFIGY_DIFFICULTY_EXPERT = 4,
}

export const EffigyDifficulty: EnumDefault = {
  __signed: true,
  types: types,
}
