import { ConfigDefault } from "../"

export const QTEExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    startStepId: "vuint",
    qteType: "QTEType",
    startExec: "QTEExec[]",
    successExec: "QTEExec[]",
    failExec: "QTEExec[]",
  },
}
