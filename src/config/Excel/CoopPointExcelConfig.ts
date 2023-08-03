import { ConfigDefault } from "../"

export const CoopPointExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chapterId: "vuint",
    type: "CoopPointType",
    acceptQuest: "vuint",
    postPointList: "vuint[]",
    pointNameTextMapHash: "vuint",
    pointDecTextMapHash: "vuint",
    pointPosId: "vuint",
    photoMaleHash: "vuint",
    photoFemaleHash: "vuint",
  },
}
