import { ConfigDefault } from "../"

export const TalkSelectTimeOutExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    timeLimit: "float",
    nextTalkID: "vuint",
  },
}