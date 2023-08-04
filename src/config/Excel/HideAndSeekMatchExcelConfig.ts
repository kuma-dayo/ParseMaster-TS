import { ConfigDefault } from ".."

export const HideAndSeekMatchExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "MatchLimitExcelConfig",
  Fields: {
    titleTextMapHash: "vuint",
    unlockTipsTextMapHash: "vuint",
    mapSmallIconPathHash: "vuint",
    mapIconPathHash: "vuint",
    dscTextMapHash: "vuint",
    NKPIPFMOGKA: "vuint[]",
    LGLHFKPIADH: "vuint",
    sceneId: "vuint",
    groupId: "vuint",
    transportPointList: "vuint[]",
    durationList: "vuint[]",
    galleryID: "vuint",
    id: "vuint",
    cond: "HideAndSeekMatchCond[]",
  },
}
