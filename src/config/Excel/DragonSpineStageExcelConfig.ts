import { ConfigDefault } from ".."

export const DragonSpineStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chapterId: "vuint",
    descTextMapHash: "vuint",
    coin_id_list: "vuint[]",
    openday: "vuint",
    preQuestId: "vuint",
    mission_id_list: "vuint[]",
    rewardPreviewId: "vuint",
  },
}
