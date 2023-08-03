import { ConfigDefault } from "../"

export const MoonfinTrialLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    levelId: "vuint",
    levelType: "MoonfinTrialActivityLevelType",
    specificFishId: "vuint",
    galleryId: "vuint",
    challengeId: "vuint",
    openDay: "vuint",
    watcherID: "vuint[]",
    leadingLevel: "vuint",
    leadingMainQuest: "vuint",
    mainQuest: "vuint",
    markPosition: "float[]",
    rewardPreviewId: "vuint",
    levelNameTextMapHash: "vuint",
    descriptionTextMapHash: "vuint",
    titleTextMapHash: "vuint",
  },
}
