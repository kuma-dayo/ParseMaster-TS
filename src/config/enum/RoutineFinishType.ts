import { EnumDefault } from "."

enum types {
  ROUTINE_FINISH_NONE = 0,
  ROUTINE_FINISH_KILL_MONSTER = 1,
  ROUTINE_FINISH_GATHER = 2,
  ROUTINE_CHALLENGE_FINISH = 3,
}

export const RoutineFinishType: EnumDefault = {
  __signed: true,
  types: types,
}
