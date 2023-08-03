import { ConfigDefault } from "../"

export const EffigyLimitingConditionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    descTextMapHash: "vuint",
    conditionType: "EffigyCondition",
    icon: "string",
    conditionParam1: "vuint",
    conditionParam2: "vuint[]",
    exclusiveId: "vuint",
    isInRow: "bool",
    exclusiveDescTextMapHash: "vuint",
    score: "vint",
  },
}
