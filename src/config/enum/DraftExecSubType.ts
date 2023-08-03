import { EnumDefault } from "."

enum types {
  DRAFT_EXEC_SUB_NONE = 0,
  DRAFT_EXEC_SUB_ISLAND_PARTY = 1,
}

export const DraftExecSubType: EnumDefault = {
  __signed: true,
  types: types,
}
