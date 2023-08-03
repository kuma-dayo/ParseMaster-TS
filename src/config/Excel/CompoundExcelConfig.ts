import { ConfigDefault } from "../"

export const CompoundExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    groupID: "vuint",
    nameTextMapHash: "vuint",
    rankLevel: "vuint",
    type: "CompoundType",
    isDefaultUnlocked: "bool",
    costTime: "vuint",
    queueSize: "vuint",
    inputVec: "IdCountConfig[]",
    outputVec: "IdCountConfig[]",
    dropId: "vuint",
    icon: "string",
    descTextMapHash: "vuint",
    countDescTextMapHash: "vuint",
  },
}