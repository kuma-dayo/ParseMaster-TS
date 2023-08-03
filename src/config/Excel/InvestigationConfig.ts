import { ConfigDefault } from "../"

export const InvestigationConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    cityId: "vuint",
    nextInvestigationIdList: "vuint[]",
    unlockOpenStateType: "OpenStateType",
    unlockLevel: "vuint",
    rewardId: "vuint",
    titleTextMapHash: "vuint",
    investigationType: "InvestigationType",
  },
}
