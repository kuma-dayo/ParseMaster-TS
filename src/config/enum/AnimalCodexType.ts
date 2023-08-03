import { EnumDefault } from "."

enum types {
  CODEX_ANIMAL = 0,
  CODEX_MONSTER = 1,
}

export const AnimalCodexType: EnumDefault = {
  __signed: true,
  types: types,
}