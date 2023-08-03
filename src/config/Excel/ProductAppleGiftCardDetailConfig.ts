import { ConfigDefault } from "../"

export const ProductAppleGiftCardDetailConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ProductDetailConfig",
  Fields: {
    contentVec: "PackageContentConfig[]",
    mailConfigId: "vuint",
  },
}