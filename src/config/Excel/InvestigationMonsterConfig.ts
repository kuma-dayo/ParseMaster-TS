import { ConfigDefault } from "../"

export const InvestigationMonsterConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    cityId: "vuint",
    monsterIdList: "vuint[]",
    groupIdList: "vuint[]",
    unlockParentQuestId: "vuint",
    preUnlockParentQuestId: "vuint",
    unlockChapterIdList: "vuint[]",
    unlockWqParentQuestIdList: "vuint[]",
    wqAcceptHintTextMapHash: "vuint",
    activeUnlockQuestActivityId: "vuint",
    rewardPreviewId: "vuint",
    mapMarkCreateType: "InvestigationMonsterMapMarkCreateType",
    mapMarkCreateCondition: "InvestigationMonsterMapMarkCreateCondition",
    monsterCategory: "MonsterCategory",
    nameTextMapHash: "vuint",
    icon: "string",
    descTextMapHash: "vuint",
    lockDescTextMapHash: "vuint",
    occupiedQuestIdList: "vuint[]",
  },
}
