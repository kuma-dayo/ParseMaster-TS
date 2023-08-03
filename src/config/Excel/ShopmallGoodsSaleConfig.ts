import { ConfigDefault } from "../"

export const ShopmallGoodsSaleConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    goodsId: "vuint",
    discountScoin: "vuint",
    discountHcoin: "vuint",
    discountMcoin: "vuint",
    discountRate: "float",
    discountBeginTime: "string",
    discountEndTime: "string",
    discountBeginTimestamp: "vuint",
    discountEndTimestamp: "vuint",
  },
}
