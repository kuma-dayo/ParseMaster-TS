import { ConfigDefault } from ".."

export const GivingExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    talkId: "vuint",
    mistakeTalkId: "vuint",
    tab: "BagTab",
    isRepeatable: "bool",
    givingMethod: "GivingMethod",
    exactItems: "IdCountConfig[]",
    exactFinishTalkId: "vuint",
    givingGroupIds: "vuint[]",
    givingGroupCount: "vuint",
    highlight: "bool",
    icon: "string",
    isRemoveItem: "bool",
    isReset: "bool",
    isMpEnable: "bool",
    givingType: "GivingType",
    isTakeBack: "bool",
  },
}
