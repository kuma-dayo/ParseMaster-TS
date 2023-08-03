import { ConfigDefault } from "../"

export const TutorialExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    detailIdList: "vuint[]",
    pauseGame: "bool",
    isMultiPlatform: "bool",
    mobileDetailIdList: "vuint[]",
    joypadDetailIdList: "vuint[]",
  },
}
