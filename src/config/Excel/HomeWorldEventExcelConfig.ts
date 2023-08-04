import { ConfigDefault } from ".."

export const HomeWorldEventExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    eventID: "vuint",
    eventType: "HomeAvatarEventType",
    avatarID: "vuint",
    talkID: "vuint",
    rewardID: "vuint",
    furnitureSuitID: "vuint",
    lasttime: "vuint",
    order: "vuint",
    conditionType1: "HomeAvatarEventCondType",
    conditionParam1: "vuint",
    conditionType2: "HomeAvatarEventCondType",
    conditionParam2: "vuint",
  },
}
