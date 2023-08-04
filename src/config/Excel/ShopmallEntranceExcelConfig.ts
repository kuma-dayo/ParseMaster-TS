import { ConfigDefault } from ".."

export const ShopmallEntranceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    nameTextMapHash: "vuint",
    subTabList: "vuint[]",
    shopType: "ShopType",
    icon: "string",
    showType: "ShopmallEntranceType",
    order: "vuint",
  },
}
