import { EnumDefault } from "."

enum types {
  CODEX_COLLECTION = 0,
  CODEX_COOKING_FOOD = 1,
  CODEX_WAR_TROPHIES = 2,
  CODEX_WIDGET = 3,
}

export const MaterialCodexType: EnumDefault = {
  __signed: true,
  types: types,
}
