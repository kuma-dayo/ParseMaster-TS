import { ConfigDefault } from "../"

export const H5ActivityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    h5ActivityId: "vuint",
    nameTextMapHash: "vuint",
    detailTextMapHash: "vuint",
    rewardPreview: "vuint",
    condComb: "LogicType",
    condList: "H5ActivityCondConfig[]",
  },
}
