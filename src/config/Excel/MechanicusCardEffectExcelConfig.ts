import { ConfigDefault } from "../"

export const MechanicusCardEffectExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    targetType: "MechanicusCardTargetType",
    targetParamList: "vuint[]",
    effectType: "MechanicusCardEffectType",
    effectStrParam: "string",
    effectParam1: "vint",
    effectParam2: "vint",
    effectParam3: "vint",
  },
}
