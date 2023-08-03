import { ConfigDefault } from "../"

export const ConfigBaseWidget: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    materialId: "vuint",
    isConsumeMaterial: "bool",
    isEquipable: "bool",
    coolDown: "vuint",
    coolDownOnFail: "vuint",
    coolDownGroup: "vuint",
    isCdUnderTimeScale: "bool",
    isAllowedInDungeon: "bool",
    isAllowedInRoom: "bool",
    ornamentsType: "OrnamentsType",
  },
}