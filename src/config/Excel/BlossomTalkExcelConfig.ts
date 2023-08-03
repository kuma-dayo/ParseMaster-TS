import { ConfigDefault } from "../"

export const BlossomTalkExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    refreshId: "vuint",
    groupId: "vuint",
    talkId: "vuint[]",
  },
}
