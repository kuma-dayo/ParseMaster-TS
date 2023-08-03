import { ConfigDefault } from "../"

export const ForgeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    playerLevel: "vuint",
    isDefaultShow: "bool",
    effectiveWorldLevels: "vuint[]",
    forgeType: "vuint",
    showItemId: "vuint",
    showConsumeItemId: "vuint",
    resultItemId: "vuint",
    resultItemCount: "vuint",
    mainRandomDropId: "vuint",
    mainForgeRandomId: "vuint",
    forgeTime: "vuint",
    queueNum: "vuint",
    scoinCost: "vuint",
    randomItems: "RandomItemConfig[]",
    materialItems: "IdCountConfig[]",
    priority: "vuint",
    forgePoint: "vuint",
    forgePointNoticeTextMapHash: "vuint",
  },
}
