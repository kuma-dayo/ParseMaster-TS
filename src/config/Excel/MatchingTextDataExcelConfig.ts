import { ConfigDefault } from ".."

export const MatchingTextDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    matchId: "vuint",
    matchIconHash: "vuint",
    matchBtnName: "string",
    matchBtnTips: "string",
    requirementDescTextMapHash: "vuint",
    matchLimitReasonDescTextMapHash: "vuint",
    limitWarningDescTextMapHash: "vuint",
    inviteGuestDescTextMapHash: "vuint",
    inviteHostDescTextMapHash: "vuint",
    matchStartDesc: "string",
    matchTitleTextMapHash: "vuint",
    matchSuccessDescTextMapHash: "vuint",
    unkId: "vuint",
  },
}
