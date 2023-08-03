import { EnumDefault } from "."

enum types {
  Invalid = 0,
  WeatherMonologue = 1,
  Dialog = 2,
  DungeonReminder = 3,
  AnimatorEvent = 4,
  Fetter = 5,
  Gacha = 6,
  JoinTeam = 7,
}

export const AudioVoiceTrigger: EnumDefault = {
  __signed: true,
  types: types,
}
