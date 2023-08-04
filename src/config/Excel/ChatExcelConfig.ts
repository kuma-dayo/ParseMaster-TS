import { ConfigDefault } from ".."

export const ChatExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    channel: "vuint",
    priority: "float",
    tabShownNameTextMapHash: "vuint",
    chatChannelIcon: "string",
    TagOtherTextMapHash: "vuint",
    TagSelfTextMapHash: "vuint",
    EnterTextMapHash: "vuint",
    LeaveTextMapHash: "vuint",
    PDCGODCNMIP: "bool",
  },
}
