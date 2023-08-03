import { ConfigDefault } from "../"

export const HomeworldLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    exp: "vuint",
    comfortPointLimit: "vuint",
    homeCoinStoreLimit: "vuint",
    homeFetterExpStoreLimit: "vuint",
    rewardId: "vuint",
    furnitureMakeSlotCount: "vuint",
    outdoorUnlockBlockCount: "vuint",
    freeUnlockModuleCount: "vuint",
    deployNpcCount: "vuint",
    djinnGadgetId: "vuint",
    limitShopGoodsCount: "vuint",
    limitShopGoodsExtraCount: "vuint",
    levelFuncs: "string[]",
  },
}
