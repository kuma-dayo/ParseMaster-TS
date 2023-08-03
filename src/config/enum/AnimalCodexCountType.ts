import { EnumDefault } from "."

enum types {
  CODEX_COUNT_TYPE_NONE = 0,
  CODEX_COUNT_TYPE_KILL = 1,
  CODEX_COUNT_TYPE_FISH = 2,
  CODEX_COUNT_TYPE_CAPTURE = 3,
}

export const AnimalCodexCountType: EnumDefault = {
  __signed: true,
  types: types,
}
