import { ConfigDefault } from "../"

export const PhotographExpressionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "FetterConfig",
  Fields: {
    emotionName: "string",
    phonemeName: "string",
    icon: "string",
    emotionDescriptionTextMapHash: "vuint",
    unlockDescTextMapHash: "vuint",
  },
}
