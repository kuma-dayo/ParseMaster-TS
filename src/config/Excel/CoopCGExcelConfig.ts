import { ConfigDefault } from ".."

export const CoopCGExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chapterId: "vuint",
    unlockPointId: "vuint",
    cgType: "CoopCGType",
    unlockCond: "CoopCondConfig[]",
    showImageHash: "vuint",
    showImageSmallHash: "vuint",
    cgNameTextMapHash: "vuint",
    cgDesTextMapHash: "vuint",
    sortId: "vuint",
  },
}
