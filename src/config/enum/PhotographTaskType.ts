import { EnumDefault } from "."

enum types {
  PHOTOGRAPH_TASK_TYPE_NORMAL = 0,
  PHOTOGRAPH_TASK_TYPE_INTERACTION = 1,
}

export const PhotographTaskType: EnumDefault = {
  __signed: true,
  types: types,
}
