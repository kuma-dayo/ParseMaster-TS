import { ConfigDefault } from "../"

export const DraftTextDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    draftId: "vuint",
    draftBtnName: "string",
    draftBtnTips: "string",
    requirementDescTextMapHash: "vuint",
    draftLimitReasonDescTextMapHash: "vuint",
    limitWarningDescTextMapHash: "vuint",
    inviteDescTextMapHash: "vuint",
    inviteGuestDescTextMapHash: "vuint",
    inviteHostDescTextMapHash: "vuint",
    inviteWarningDescTextMapHash: "vuint",
    draftTitleTextMapHash: "vuint",
  },
}
