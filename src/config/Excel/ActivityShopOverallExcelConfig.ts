import { ConfigDefault } from "../"

export const ActivityShopOverallExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    shopType: "ShopType",
    sheetList: "vuint[]",
  },
}
