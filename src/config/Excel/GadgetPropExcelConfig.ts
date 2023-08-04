import { ConfigDefault } from ".."

export const GadgetPropExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    hp: "float",
    hpCurve: "GrowCurveType",
    attack: "float",
    attackCurve: "GrowCurveType",
    defense: "float",
    defenseCurve: "GrowCurveType",
  },
}
