import { ConfigDefault } from "../"

export const LanV2FireworksFactorDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    factorId: "vuint",
    perfectRange: "vuint[]",
    factorLength: "vuint",
    type: "FireworksReformParamType",
    colorRange: "vuint[]",
  },
}
