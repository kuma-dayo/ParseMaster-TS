import { EnumDefault } from "."

enum types {
  DRAGON_SPINE_EXEC_TYPE_NONE = 0,
  DRAGON_SPINE_EXEC_TYPE_BAN_DROP = 1,
  DRAGON_SPINE_EXEC_TYPE_CLEAR_ITEM = 2,
}

export const DragonSpineMissionFinishExecType: EnumDefault = {
  __signed: true,
  types: types,
}
