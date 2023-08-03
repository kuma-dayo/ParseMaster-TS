import { ConfigDefault } from "../"

export const ShareCDExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    coolDownList: "CoolDownInfo[]",
    isUseRealTime: "bool",
    isUseExternalSystem: "bool",
  },
}
