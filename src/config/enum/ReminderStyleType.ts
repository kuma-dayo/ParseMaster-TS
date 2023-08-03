import { EnumDefault } from "."

enum types {
  Normal = 0,
  Banner = 1,
  InfoTextDialog = 2,
  EventPromptDown = 3,
  WhiteMessage = 4,
}

export const ReminderStyleType: EnumDefault = {
  __signed: true,
  types: types,
}