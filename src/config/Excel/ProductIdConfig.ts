import { ConfigDefault } from "../"

export const ProductIdConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    productId: "string",
    configId: "vuint",
    isInternal: "bool",
    entitlementId: "string",
    catalogItemId: "string",
    platformTypeStrList: "string[]",
  },
}