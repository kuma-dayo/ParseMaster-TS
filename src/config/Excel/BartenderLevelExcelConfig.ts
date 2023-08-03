import { ConfigDefault } from "../"

export const BartenderLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    levelNameTextMapHash: "vuint",
    unlockDay: "vuint",
    levelDuration: "vuint",
    orderList: "vuint[]",
    orderCD: "vuint",
    watcherIdList: "vuint[]",
    levelDescriptionTextMapHash: "vuint",
  },
}
