import { ConfigDefault } from ".."

export const MichiaeStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    openDay: "vuint",
    watcherList: "vuint[]",
    maxOfferingLevel: "vuint",
    maxCrystalExp: "vuint",
    tabNameTextMapHash: "vuint",
  },
}
