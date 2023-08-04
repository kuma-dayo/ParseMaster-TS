import { ConfigDefault } from ".."

export const ChessCardEffect: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    targetType: "ChessCardTargetType",
    targetParamList: "vuint[]",
    effectType: "ChessCardEffectType",
    effectStrParam: "string",
    effectParam1: "vint",
    effectParam2: "vint",
    effectParam3: "vint",
    beginRound: "vuint",
    activeRounds: "vuint",
    effectIndex: "vuint",
  },
}
