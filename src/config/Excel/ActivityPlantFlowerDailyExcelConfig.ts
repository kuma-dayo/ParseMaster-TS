import { ConfigDefault } from "../"

export const ActivityPlantFlowerDailyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    dailyConfigId: "vuint",
    costItemList: "IdCountConfig[]",
    rewardIdList: "vuint[]",
  },
}
