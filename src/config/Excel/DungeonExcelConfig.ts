import { ConfigDefault } from "../"

export const DungeonExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    displayNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    type: "DungeonType",
    subType: "DungeonSubType",
    isDynamicLevel: "bool",
    serialId: "vuint",
    playType: "DungeonPlayType",
    sceneId: "vuint",
    eventInterval: "vuint",
    involveType: "InvolveType",
    showLevel: "vuint",
    avatarLimitType: "vuint",
    limitLevel: "vuint",
    levelRevise: "vint",
    prevDungeonId: "vuint",
    requireAvatarId: "vuint",
    passCond: "vuint",
    passJumpDungeon: "vuint",
    reviveIntervalTime: "vuint",
    reviveMaxCount: "vuint",
    dayEnterCount: "vuint",
    enterCostItems: "IdCountConfig[]",
    firstPassRewardPreviewID: "vuint",
    passRewardPreviewID: "vuint",
    settleCountdownTime: "vuint",
    failSettleCountdownTime: "vuint",
    quitSettleCountdownTime: "vuint",
    settleShows: "SettleShowType[]",
    isBanDieOptionReviveAfterSettle: "bool",
    GOKNBLOJIAK: "bool",
    ONDEIHPICCA: "bool",
    settleUIType: "SettleUIType",
    statueCostID: "vuint",
    statueCostCount: "vuint",
    statueDrop: "vuint",
    recommendElementTypes: "ElementType[]",
    recommendTips: "string[]",
    levelConfigMap: "map<vuint,vuint>",
    previewMonsterList: "vuint[]",
    gearDescTextMapHash: "vuint",
    cityID: "vuint",
    dontShowPushTips: "bool",
    entryPicPath: "string",
    stateType: "DungeonStateType",
    factorPic: "string",
    factorIcon: "string",
    enableQuestGuide: "bool",
    DCCMNLPOBEG: "bool",
  },
}
