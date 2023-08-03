import { ConfigDefault } from "../"

export const ShopGoodsExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    goodsId: "vuint",
    subTagNameTextMapHash: "vuint",
    subTabId: "vuint",
    shopType: "vuint",
    itemId: "vuint",
    rotateId: "vuint",
    showId: "vuint",
    itemCount: "vuint",
    costScoin: "vuint",
    costHcoin: "vuint",
    costMcoin: "vuint",
    discountRate: "float",
    originalPrice: "vuint",
    costItems: "IdCountConfig[]",
    buyLimit: "vuint",
    refreshType: "ShopRefreshType",
    refreshParam: "vuint",
    displayDaysBeforeSell: "vuint",
    beginTime: "string",
    endTime: "string",
    isBuyOnce: "bool",
    precondition: "ShopPrecondition",
    preconditionParam: "vuint",
    preconditionParamList: "string[]",
    preconditionHidden: "bool",
    minShowLevel: "vuint",
    minPlayerLevel: "vuint",
    maxPlayerLevel: "vuint",
    sortLevel: "vuint",
    secondarySheetId: "vuint",
    chooseOneGroupId: "vuint",
    platformTypeList: "vuint[]",
  },
}