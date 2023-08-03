import { ConfigDefault } from "../"

export const NewActivityCondExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    condId: "vuint",
    condComb: "LogicType",
    cond: "NewActivityCond[]",
  },
}
