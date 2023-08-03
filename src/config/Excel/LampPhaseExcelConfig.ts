import { ConfigDefault } from "../"

export const LampPhaseExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    phaseId: "vuint",
    nameTextMapHash: "vuint",
    endProgress: "vuint",
    materialVec: "vuint[]",
    GivingId: "vuint",
    contribution: "vuint",
    addProgress: "vuint",
    isDisplay: "bool",
    rewardId: "vuint",
    notifyGroupId: "vuint",
    gadgetId: "vuint",
  },
}
