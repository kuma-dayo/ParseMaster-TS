import { ConfigDefault } from "../"

export const ProductPsnCompensationDetailConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ProductDetailConfig",
  Fields: {
    contentVec: "PackageContentConfig[]",
    mailConfigId: "vuint",
    limitCount: "vuint",
  },
}
