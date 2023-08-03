import { EnumDefault } from "."

enum types {
  DRAFT_EXEC_NONE = 0,
  DRAFT_EXEC_GALLERY = 1,
  DRAFT_EXEC_HIDE_AND_SEEK = 2,
  DRAFT_EXEC_AUTOSTART_GALLERY = 3,
  DRAFT_EXEC_CHAR_AMUSEMENT = 4,
}

export const DraftExecType: EnumDefault = {
  __signed: true,
  types: types,
}
