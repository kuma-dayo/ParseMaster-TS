import { ConfigDefault } from ".."

export const IrodoriMasterLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    sceneId: "vuint",
    groupId: "vuint",
    pointId: "vuint",
    galleryId: "vuint",
    cutscene: "string",
    galleryAbilityGroupIndex: "vuint",
    trialAvatarList: "vuint[]",
    watcherList: "vuint[]",
  },
}
