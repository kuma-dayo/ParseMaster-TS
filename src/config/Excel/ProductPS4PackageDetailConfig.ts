import { ConfigDefault } from "../"

export const ProductPS4PackageDetailConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ProductDetailConfig",
  Fields: {
    contentVec: "PackageContentConfig[]",
    mailConfigId: "vuint",
  },
}
