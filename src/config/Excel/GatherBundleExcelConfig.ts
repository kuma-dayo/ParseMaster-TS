import { ConfigDefault } from "../"

export const GatherBundleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    bundleName: "string",
    baseGadgetId: "vuint",
    points: "PointInfo[]",
  },
}
