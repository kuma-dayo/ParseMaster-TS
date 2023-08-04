import { ConfigDefault } from ".."

export const ProductGoogleGiftCardDetailConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ProductDetailConfig",
  Fields: {
    contentVec: "PackageContentConfig[]",
    mailConfigId: "vuint",
  },
}
