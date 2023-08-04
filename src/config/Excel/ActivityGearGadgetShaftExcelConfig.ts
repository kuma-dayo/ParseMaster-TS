import { ConfigDefault } from ".."

export const ActivityGearGadgetShaftExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    gadgetID: "vuint",
    radius: "float",
    layerOffsetList: "float[]",
    canNotPlaceTipOffset: "float",
    clenchRate: "float[]",
  },
}
