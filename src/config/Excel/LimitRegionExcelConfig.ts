import { ConfigDefault } from ".."

export const LimitRegionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    name: "string",
    openstate: "OpenStateType",
    sceneId: "vuint",
    type: "LimitRegionType",
    order: "vuint",
    HPMPCDOOLFO: "vuint",
    NLPDEFLABJE: "bool",
  },
}
