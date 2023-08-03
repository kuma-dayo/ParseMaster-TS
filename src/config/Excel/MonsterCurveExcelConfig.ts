import { ConfigDefault } from "../"

export const MonsterCurveExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    curveInfos: "GrowCurveInfo[]",
  },
}
