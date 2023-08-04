import { ConfigDefault } from ".."

export const WeaponCurveExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    curveInfos: "GrowCurveInfo[]",
  },
}
