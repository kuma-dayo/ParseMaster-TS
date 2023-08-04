import { ConfigDefault } from ".."

export const ProductCardDetailConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ProductDetailConfig",
  Fields: {
    cardProductType: "CardProductType",
    itemNameTextMapHash: "vuint",
    icon: "string",
    totalLimitDays: "vuint",
    days: "vuint",
    hcoinPerDay: "vuint",
    mcoinBase: "vuint",
    baseItemMap: "map<vuint,vuint>",
    perDayItemMap: "map<vuint,vuint>",
    replaceMcoinNum: "vuint",
    firstRewardTextTextMapHash: "vuint",
    dailyRewardTextTextMapHash: "vuint",
    totalRewardTextTextMapHash: "vuint",
    totalDaysTextTextMapHash: "vuint",
    remainDaysTextTextMapHash: "vuint",
    remainDaysText2TextMapHash: "vuint",
    explainTitleTextMapHash: "vuint",
    explainDescTextMapHash: "vuint",
    sortLevel: "vuint",
  },
}
