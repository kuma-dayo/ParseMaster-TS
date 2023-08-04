import { ConfigDefault } from ".."

export const QTEStepExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    configPath: "string",
    nextStep: "vuint",
  },
}
