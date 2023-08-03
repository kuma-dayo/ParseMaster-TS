import { ConfigDefault } from "../"

export const HomeWorldLimitShopExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    goodsId: "vuint",
    itemID: "vuint",
    poolID: "vuint",
    cond: "HomeWorldLimitShopCond[]",
    buyLimit: "vuint",
    costItems: "IdCountConfig[]",
    weight: "vuint",
  },
}
