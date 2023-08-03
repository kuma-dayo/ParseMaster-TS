import { ConfigDefault } from "../"

export const GadgetCurveExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    curveInfos: "GrowCurveInfo[]",
  },
}
