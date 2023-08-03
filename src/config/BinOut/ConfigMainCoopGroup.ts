import { ConfigDefault } from "../"

export const ConfigMainCoopGroup: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    coopInteractionMap: "map<vuint,ConfigCoopInteractionGroup>",
    subStartPointMap: "map<vuint,CoopSubStartPoint>",
    savePointMap: "map<vuint,CoopSavePoint>",
    confidenceValue: "vuint",
    maxConfidenceValue: "vuint",
    temperamentMap: "map<CoopTemperamentType,CoopTemperament>",
    useConfidence: "bool",
    useTemperament: "bool",
    coopTempValueMap: "map<vuint,CoopTempValue>",
  },
}