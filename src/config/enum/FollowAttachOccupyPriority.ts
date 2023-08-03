import { EnumDefault } from "."

enum types {
  FollowPet = 10,
  ThemePlay = 50,
  QuestEvent = 80,
  ActivityEvent = 90,
  QuestBlank = 100,
}

export const FollowAttachOccupyPriority: EnumDefault = {
  __signed: true,
  types: types,
}
