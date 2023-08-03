import { ConfigDefault } from "../"

export const MailExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    expireDays: "vuint",
    titleTextMapHash: "vuint",
    contentTextMapHash: "vuint",
    senderTextMapHash: "vuint",
    isStar: "bool",
    rewardId: "vuint",
  },
}
