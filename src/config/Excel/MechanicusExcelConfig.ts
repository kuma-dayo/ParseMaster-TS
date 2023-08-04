import { ConfigDefault } from ".."

export const MechanicusExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    mechanicusID: "vuint",
    sequenceList: "vuint[]",
    ticketItemID: "vuint",
    ticketCostCount: "vuint",
    matchPlayerLimit: "vuint",
    openGearList: "vuint[]",
    openMapList: "vuint[]",
    teachDifficultLevel: "vuint",
    punishTime: "vuint",
  },
}
