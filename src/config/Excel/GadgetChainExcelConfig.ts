import { ConfigDefault } from "../"

export const GadgetChainExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    chainId: "vuint",
    initLevel: "vuint",
    maxLevel: "vuint",
    buffList: "vuint[]",
    isAllowLuaRevise: "bool",
  },
}
