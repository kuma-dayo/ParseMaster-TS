import { ConfigDefault } from ".."

export const GivingGroupExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    ItemIds: "vuint[]",
    finishTalkId: "vuint",
    mistakeTalkId: "vuint",
    finishDialogId: "vuint",
  },
}
