import { ConfigDefault } from "../"

export const BlossomRefreshExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    icon: "string",
    descTextMapHash: "vuint",
    cityId: "vuint",
    refreshType: "BlossomRefreshType",
    refreshCount: "vuint",
    refreshTime: "string",
    openState: "OpenStateType",
    openLevel: "vuint",
    closeLevel: "vuint",
    refreshCondVec: "BlossomRefreshCond[]",
    reviseLevel: "vuint",
    itemLimitType: "ItemLimitType",
    blossom_chest_id: "vuint",
    camp_update_need_count: "vuint",
    roundMaxCount: "vuint",
    dropVec: "BlossomRewardExcelConfig[]",
    clientShowType: "BlossomShowType",
    hideBG: "bool",
    rewardType: "BlossomRewardType",
  },
}
