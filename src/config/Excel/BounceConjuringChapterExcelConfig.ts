import { ConfigDefault } from "../"

export const BounceConjuringChapterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chapterId: "vuint",
    openDay: "vuint",
    galleryId: "vuint",
    DraftID: "vuint",
    watcherIdList: "vuint[]",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    otherBallList: "vuint[]",
    newBallList: "vuint[]",
    otherItemList: "vuint[]",
    upItemList: "vuint[]",
    pos: "float[]",
  },
}
