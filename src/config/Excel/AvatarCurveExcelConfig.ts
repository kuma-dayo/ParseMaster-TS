import { ConfigDefault } from ".."

export const AvatarCurveExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    curveInfos: "GrowCurveInfo[]",
  },
}
