import { ConfigDefault } from "../"

export const IrodoriChessCardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    costPoints: "vuint",
    effect: "IrodoriChessCardEffect",
    extraEffectList: "IrodoriChessCardEffect[]",
    cardType: "IrodoriChessCardType",
    cardQualityType: "IrodoriChessCardQualityType",
    tag: "IrodoriChessCardTag",
    cardNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    descParam: "float[]",
    cardNumericalList: "IrodoriCardNumerical[]",
  },
}
