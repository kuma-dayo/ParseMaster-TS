import { ConfigDefault } from "../"

export const ActivityIslandPartyStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    stageType: "ActivityIslandPartyStageType",
    galleryId: "vuint",
    seriesId: "vuint",
    matchId: "vuint",
    draftId: "vuint",
    unlockDay: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    bannerDescTextMapHash: "vuint",
    failHintTextMapHash: "vuint",
    watcherList: "vuint[]",
    scoreIDList: "vuint[]",
    pushTipsID: "vuint",
  },
}
