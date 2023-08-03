import { ConfigDefault } from "../"

export const MpPlayGroupExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    EntryId: "vuint",
    playId: "vuint",
    serverLuaCallGroupList: "vuint[]",
    resinCost: "vuint",
    materialCostId: "vuint",
    materialCostNum: "vuint",
    isDirectToBag: "bool",
    upAvatarList: "vuint[]",
    clientShowType: "MpPlayShowType",
    rewardVec: "MpCrucibleRewardConfig[]",
    activateGroupList: "vuint[]",
    groupList: "vuint[]",
    bornGroupId: "vuint",
    bornConfigId: "vuint",
    safeGroupId: "vuint",
    safeConfigId: "vuint",
    rebornGroupId: "vuint",
    rebornConfigId: "vuint",
    rewardGroupId: "vuint",
    rewardConfigId: "vuint",
    generalRewardConfigId: "vuint",
    prepareTime: "vuint",
    singlePrepareTime: "vuint",
    centerPosList: "float[]",
    centerRadius: "vuint",
    targetPosList: "float[]",
    reviseId: "vuint",
    rateList: "vuint[]",
    limitRegion: "string",
    abilityGroupList: "vuint[]",
    isDisabled: "bool",
  },
}