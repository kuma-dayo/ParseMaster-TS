import { ConfigDefault } from ".."

export const ShopMaterialOrderExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    order: "vuint",
    shopType: "ShopType",
  },
}
