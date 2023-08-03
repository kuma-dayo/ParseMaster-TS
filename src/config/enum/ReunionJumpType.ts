import { EnumDefault } from "."

enum types {
  REUNION_JUMP_NONE = 0,
  REUNION_JUMP_WEBVIEW = 1,
  REUNION_JUMP_INVESTIGATION_QUEST = 2,
  REUNION_JUMP_INVESTIGATION_EDUCATION = 3,
  REUNION_JUMP_HOME = 4,
  REUNION_JUMP_GCG = 5,
}

export const ReunionJumpType: EnumDefault = {
  __signed: true,
  types: types,
}
