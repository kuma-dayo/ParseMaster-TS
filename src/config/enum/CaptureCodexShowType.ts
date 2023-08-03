import { EnumDefault } from "."

enum types {
  CAPTURE_CODEX_SHOW_TYPE_NONE = 0,
  CAPTURE_CODEX_SHOW_TYPE_NOT_SHOW = 1,
  CAPTURE_CODEX_SHOW_TYPE_CAPTURE_ANIMAL = 2,
}

export const CaptureCodexShowType: EnumDefault = {
  __signed: true,
  types: types,
}
