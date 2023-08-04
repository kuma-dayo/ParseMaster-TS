import { ConfigDefault } from ".."

export const QuestAcceptionMarkExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    configId: "vuint",
    subQuestId: "vuint",
    npcId: "vuint",
    isDailyNpc: "bool",
    sceneId: "vuint",
    fallbackPosition: "float[]",
    blockMP: "bool",
    descTextMapHash: "vuint",
    acceptableTimeTipsTextMapHash: "vuint",
  },
}
