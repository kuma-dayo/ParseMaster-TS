import { ConfigDefault } from "../"

export const ExpeditionDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    nameTextMapHash: "vuint",
    cityId: "vuint",
    openConditionVec: "ExpeditionOpenCondition[]",
    timeRewardVec: "ExpeditionReward[]",
    descriptionTextMapHash: "vuint",
    picture: "string",
    posX: "float",
    posY: "float",
  },
}
