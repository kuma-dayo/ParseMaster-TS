import { ConfigDefault } from ".."

export const HomeWorldComfortLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    levelID: "vuint",
    comfort: "vuint",
    homeCoinProduceRate: "vuint",
    companionshipExpProduceRate: "vuint",
    levelNameTextMapHash: "vuint",
    levelIconHash: "vuint",
  },
}
