import { ConfigDefault } from ".."

export const CustomSlotConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    slotId: "vuint",
    optionalPartsIdList: "vuint[]",
    isNecessary: "bool",
    defaultPartsIdList: "vuint[]",
    passPartsIdList: "vuint[]",
    initPartsid: "vuint",
  },
}
