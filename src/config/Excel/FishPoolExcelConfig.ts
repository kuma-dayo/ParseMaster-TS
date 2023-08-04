import { ConfigDefault } from ".."

export const FishPoolExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    stockList: "vuint[]",
    stockGuarantee: "map<vuint,vuint>",
    stockLimitList: "FishStockLimit[]",
    maxNum: "vuint",
    poolNameTextMapHash: "vuint",
    poolDescTextMapHash: "vuint",
    abilityGroup: "string",
    teamAbilityGroup: "string",
    dropIdList: "vuint[]",
    dailyLimitNum: "vuint",
    excludeFish: "vuint[]",
    cityId: "vuint",
  },
}
