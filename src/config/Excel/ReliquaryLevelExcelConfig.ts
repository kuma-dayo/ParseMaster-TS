import { ConfigDefault } from "../"

export const ReliquaryLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    rank: "vuint",
    level: "vuint",
    exp: "vuint",
    addProps: "PropValConfig[]",
  },
}
