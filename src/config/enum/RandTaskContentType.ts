//Auto Generated by ConfigParser

import { EnumDefault } from "."

enum types {
  RAND_TASK_CONTENT_NONE = 0,
  RAND_TASK_CONTENT_CLEANUP = 1,
  RAND_TASK_CONTENT_RESCUE = 2,
  RAND_TASK_CONTENT_GUARD = 3,
  RAND_TASK_CONTENT_ATTACK = 4,
  RAND_TASK_CONTENT_INVESTIGATE = 5,
  RAND_TASK_CONTENT_PAY = 6,
  RAND_TASK_CONTENT_DUNGEON = 7,
  RAND_TASK_CONTENT_TALL = 8,
}

export const RandTaskContentType: EnumDefault = {
  __signed: true,
  types: types,
}
