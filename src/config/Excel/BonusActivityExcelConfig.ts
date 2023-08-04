import { ConfigDefault } from ".."

export const BonusActivityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    bonusActivityId: "vuint",
    condComb: "LogicType",
    condList: "SignInCondConfig[]",
    watcherId: "vuint",
    rewardItemList: "IdCountConfig[]",
  },
}
