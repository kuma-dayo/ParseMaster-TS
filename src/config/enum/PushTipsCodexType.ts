import { EnumDefault } from "."

enum types {
  CODEX_NONE = 0,
  CODEX_ELEMENT = 1,
  CODEX_ENEMY = 2,
  CODEX_SYSTEM = 3,
  CODEX_ADVENTURE = 4,
  CODEX_ARANARA = 998,
  CODEX_UNRECORDED = 999,
}

export const PushTipsCodexType: EnumDefault = {
  __signed: true,
  types: types,
}
