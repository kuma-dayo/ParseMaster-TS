import { ConfigDefault } from ".."

export const HomeworldModuleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    isFree: "bool",
    unlockTipIfUnFreeTextMapHash: "vuint",
    worldSceneId: "vuint",
    defaultRoomSceneId: "vuint",
    optionalRoomSceneIdVec: "vuint[]",
    moduleNameTextMapHash: "vuint",
    moduleDescTextMapHash: "vuint",
    region: "string[]",
    regionPointPos: "string[]",
    smallImageAddr: "string",
    bigImageAddr: "string",
  },
}
