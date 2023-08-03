import { ConfigDefault } from "../"

export const NewActivityPreviewConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityID: "vuint",
    descTextMapHash: "vuint",
    intro_titleTextMapHash: "vuint",
    intro_contentTextMapHash: "vuint",
    rewardPreviewID: "vuint",
    preQuestID: "vuint",
    middleQuestIDList: "vuint[]",
    middleQuestFinishIDList: "vuint[]",
    openQuestID: "vuint",
    pushTipsID: "vuint",
    openMainQuestIDList: "vuint[]",
    preMainQuestIDList: "vuint[]",
    NFMCDBNFMIL: "vuint[]",
    preActivityCondition: "PreviewActivityCond[]",
    isBlocked: "bool",
  },
}
