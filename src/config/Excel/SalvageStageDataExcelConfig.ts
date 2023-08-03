import { ConfigDefault } from "../"

export const SalvageStageDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    startDay: "vuint",
    unlockCondId: "vuint",
    landGroupLinkList: "vuint[]",
    seaGroupLinkList: "vuint[]",
    unlockChallengeGroupLinkList: "vuint[]",
    salvageChallengeIdList: "vuint[]",
  },
}
