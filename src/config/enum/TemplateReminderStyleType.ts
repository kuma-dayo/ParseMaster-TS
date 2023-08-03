import { EnumDefault } from "."

enum types {
  Normal = 0,
  MessageDialog = 1,
  DialogBox = 2,
  MessagePushPageFirstTime = 3,
}

export const TemplateReminderStyleType: EnumDefault = {
  __signed: true,
  types: types,
}