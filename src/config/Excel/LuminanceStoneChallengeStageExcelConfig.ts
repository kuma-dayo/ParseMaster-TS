import { ConfigDefault } from "../"

export const LuminanceStoneChallengeStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    dayIndex: "vuint",
    stageTitleTextMapHash: "vuint",
    stageDescTextMapHash: "vuint",
    stageLockTitleTextMapHash: "vuint",
    stageLockDescTextMapHash: "vuint",
    relatedCondId: "vuint[]",
    watcherList: "vuint[]",
    questList: "vuint[]",
    BundleID: "vuint",
    pushTipsID: "vuint",
  },
}
