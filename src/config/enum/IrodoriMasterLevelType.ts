import { EnumDefault } from "."

enum types {
  IRODORI_MASTER_LEVEL_NONE = 0,
  IRODORI_MASTER_LEVEL_NORAML = 1,
  IRODORI_MASTER_LEVEL_HARD = 2,
  IRODORI_MASTER_LEVEL_MASTER = 3,
}

export const IrodoriMasterLevelType: EnumDefault = {
  __signed: true,
  types: types,
}
