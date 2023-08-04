import { ConfigDefault } from ".."

export const NewActivityAvatarSelectionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    condId: "vuint",
    watcherIdList: "vuint[]",
    avatarRewardList: "vuint[]",
    descTextMapHash: "vuint",
    costItemIdList: "vuint[]",
    costItemNumList: "vuint[]",
    isBlocked: "bool",
  },
}
