import { ConfigDefault } from "../"

export const MechanicusSequenceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    sequenceID: "vuint",
    mechanicusID: "vuint",
    openLevel: "vuint",
    openGearList: "vuint[]",
    gearLevelLimite: "vuint",
    gearMoneyLimite: "vuint",
    openMapList: "vuint[]",
    activityID: "vuint",
    condID: "vuint",
    rewardPreviewID: "vuint",
  },
}
