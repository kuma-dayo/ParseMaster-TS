import { ConfigDefault } from ".."

export const ReputationEntranceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    textId: "vuint",
    entranceId: "ReputationEntranceType",
    cityId: "vuint",
    condComb: "LogicType",
    condVec: "ReputationEntranceCond[]",
    condNameVec: "vuint[]",
    nameTextMapHash: "vuint",
    titleTextMapHash: "vuint",
    explainTitleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    iconName: "string",
    order: "vuint",
  },
}
