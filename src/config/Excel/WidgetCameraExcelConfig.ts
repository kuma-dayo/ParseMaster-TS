import { ConfigDefault } from "../"

export const WidgetCameraExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    hintDistance: "float",
    UIPath: "string",
    tipsTextMapHash: "vuint",
    scanTipsTextMapHash: "vuint",
    scanSuccessDescTextMapHash: "vuint",
  },
}
