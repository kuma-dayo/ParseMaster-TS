import { ConfigDefault } from "../"

export const IrodoriChessGearExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    gearId: "vuint",
    gadgetId: "vuint",
    isEnableRotate: "bool",
    initLevel: "vuint",
    gearNameTextMapHash: "vuint",
    gearShortNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    gearIconPath: "string",
    tagIconPath: "string",
    mapIconPath: "string",
    attack: "vint",
    mastery: "vint",
    attackSpeed: "vint",
    attackRange: "vint",
  },
}
