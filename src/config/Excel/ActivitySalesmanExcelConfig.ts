import { ConfigDefault } from "../"

export const ActivitySalesmanExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    dailyConfigIdList: "vuint[]",
    normalRewardIdList: "vuint[]",
    specialRewardIdList: "vuint[]",
    specialProbList: "float[]",
    specialReward: "SalesmanSpecialReward",
  },
}
