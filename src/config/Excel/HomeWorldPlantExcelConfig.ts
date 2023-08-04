import { ConfigDefault } from ".."

export const HomeWorldPlantExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    seedID: "vuint",
    gatherIdVec: "vuint[]",
    homeGatherID: "vuint",
    bundleID: "vuint",
    dropID: "vuint",
    configHomeGather: "ConfigHomeGather[]",
    fieldID: "vuint",
    time: "vuint",
    sproutTime: "vuint",
    collectNum: "vuint",
    sproutGadgetID: "vuint",
    order: "vuint",
    inteeIconName: "string",
    inteeNameTextMapHash: "vuint",
  },
}
