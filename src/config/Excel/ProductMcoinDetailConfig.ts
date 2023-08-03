import { ConfigDefault } from "../"

export const ProductMcoinDetailConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ProductDetailConfig",
  Fields: {
    itemNameTextMapHash: "vuint",
    primNameTextMapHash: "vuint",
    icon: "string",
    mcoinNum: "vuint",
    mcoinNonFirst: "vuint",
    mcoinFirst: "vuint",
    seqence: "vuint",
  },
}