import { ConfigDefault } from "../"

export const RogueSequenceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dungeonId: "vuint",
    sequenceId: "vuint",
    cellList: "vuint[]",
    cellPriority: "map<vuint,vuint>",
    cellSeqList: "RogueSequenceCellConfig[]",
  },
}