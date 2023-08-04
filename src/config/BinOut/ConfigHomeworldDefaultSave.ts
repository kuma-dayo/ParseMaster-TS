import { ConfigDefault } from ".."

export const ConfigHomeworldDefaultSave: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    sceneID: "vuint",
    blockArrangementInfoList: "ConfigHomeworldBlockDefaultSave[]",
    isSetBornPos: "bool",
    bornPos: "Vector",
    bornRot: "Vector",
    doorList: "ConfigHomeworldFurnitureDefaultSave[]",
    stairList: "ConfigHomeworldFurnitureDefaultSave[]",
    mainHouse: "ConfigHomeworldFurnitureDefaultSave",
    comfortValue: "vuint",
    djinnPos: "Vector",
    tmpVersion: "vuint",
  },
}
