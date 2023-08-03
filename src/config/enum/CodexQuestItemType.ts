import { EnumDefault } from "."

enum types {
  TextCenter = 1,
  TextLeft = 2,
  TextRight = 3,
  SingleDialog = 4,
  MultiDialog = 5,
  SingleDialogGender = 6,
  MultiDialogGender = 7,
}

export const CodexQuestItemType: EnumDefault = {
  __signed: true,
  types: types,
}
