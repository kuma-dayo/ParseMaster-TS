import { ConfigDefault } from "../"

export const ShopmallRecommendConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    subTabId: "vuint",
    tabType: "ShopRecommendTabType",
    shopType: "ShopType",
    goodsIdVec: "vuint[]",
    configIdVec: "vuint[]",
    condComb: "LogicType",
    condVec: "ShopmallRecommendCond[]",
    order: "vuint",
    tagType: "ShopRecommendTagType",
    oneCardIconName: "string",
    colShowIconName: "string[]",
    jumpEntranceId: "vuint",
    showSaleRemainTime: "bool",
  },
}
