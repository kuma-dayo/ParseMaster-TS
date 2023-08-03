import { EnumDefault } from "."

enum types {
  DAILY_TASK_QUEST = 0,
  DAILY_TASK_SCENE = 1,
}

export const DailyTaskType: EnumDefault = {
  __signed: true,
  types: types,
}