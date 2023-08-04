import { ConfigDefault } from ".."

export const RandTaskExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    titleTextMapHash: "vuint",
    contentType: "RandTaskContentType",
    reward: "vuint",
    needUI: "bool",
    targetTextMapHash: "vuint",
    enterDistance: "vuint",
    exitDistance: "vuint",
  },
}
