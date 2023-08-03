import { ConfigDefault } from "../"

export const GroupLinksBundleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    linkType: "ActivityGroupLinkType",
    groupList: "vuint[]",
    hintGroup: "vuint",
    hintRadius: "vuint",
    rewardType: "ActivityGroupLinkRewardType",
    rewardId: "vuint",
    reviseLevel: "vuint",
    icon: "string",
    nameTextMapHash: "vuint",
    tipsTextMapHash: "vuint",
    playType: "ActivityGroupLinkPlayType",
    autoTracingAfterActive: "bool",
    uiRadius: "vuint",
    trackId: "vuint",
    guestShow: "bool",
    isDefaultShowMark: "bool",
    showAreaOnMap: "bool",
    alwaysShowArea: "bool",
    DEIEPOGDPOC: "vuint",
    PNDNMIBNENA: "bool",
  },
}
