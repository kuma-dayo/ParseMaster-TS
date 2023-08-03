import { EnumDefault } from "."

enum types {
  STAGE_TYPE_NONE = 0,
  STAGE_TYPE_NORMAL = 1,
  STAGE_TYPE_RANDOM = 2,
}

export const ActivityCharAmusementStageType: EnumDefault = {
  __signed: true,
  types: types,
}
