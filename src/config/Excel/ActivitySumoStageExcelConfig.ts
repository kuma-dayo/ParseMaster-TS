import { ConfigDefault } from "../"

export const ActivitySumoStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    scheduldId: "vuint",
    openDay: "vuint",
    dungeonId: "vuint",
    watcherList: "vuint[]",
    trialAvatarPool: "vuint[]",
    skillPool: "vuint[]",
    specialSkillPool: "vuint[]",
    galleryId: "vuint",
    hintNewSkillVec: "vuint[]",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    scoreRanks: "vuint[]",
    monsterPreviewVec: "ActivitySumoMonsterPreview[]",
    monsterWaveType: "SumoStageMonsterWaveType",
    primaryBossMonsterVec: "vuint[]",
    primaryNormalMonsterVec: "vuint[]",
  },
}
