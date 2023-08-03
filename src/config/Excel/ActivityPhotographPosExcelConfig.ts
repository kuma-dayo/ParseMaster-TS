import { ConfigDefault } from "../"

export const ActivityPhotographPosExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    groupLinkId: "vuint",
    posTitleTextMapHash: "vuint",
    requireTitleInActivityPageTextMapHash: "vuint",
    requireDescInActivityPageTextMapHash: "vuint",
    npcInviteDescTextMapHash: "vuint",
    npcCommentDescTextMapHash: "vuint",
    picSmall: "string",
    picBig: "string",
    photoCheckRootID: "vuint",
    rootNodeDescTextMapHash: "vuint",
    photoCheckSubNodeID: "vuint[]",
    photoCheckSubNodeDesc: "vuint[]",
    openDay: "vuint",
    watcherId: "vuint",
    galleryId: "vuint",
    redPointID: "vuint",
    KFKPNPEFGMJ: "vuint",
    KNFLBLJBDBO: "vuint",
    OAAMCJPENAA: "vuint",
    presetPreviewIconGirl: "string[]",
    presetPreviewIconBoy: "string[]",
    sceneId: "vuint",
  },
}