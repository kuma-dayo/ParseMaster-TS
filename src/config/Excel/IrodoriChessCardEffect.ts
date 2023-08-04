import { ConfigDefault } from ".."

export const IrodoriChessCardEffect: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    targetType: "IrodoriChessCardTargetType",
    targetParamList: "vuint[]",
    effectType: "IrodoriChessCardEffectType",
    effectStrParam: "string",
    effectParam1: "vint",
    effectParam2: "vint",
    effectParam3: "vint",
    effectIndex: "vuint",
  },
}
