import { ConfigDefault } from ".."

export const CaptureExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    monsterID: "vuint",
    captureTagConfig: "CaptureTagConfig[]",
  },
}
