import { ConfigDefault } from "../"

export const ActivityChessGearExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    gearID: "vuint",
    gearNameTextMapHash: "vuint",
    gearShortNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    gearIconPath: "string",
    tagIconPath: "string",
    attack: "vint",
    mastery: "vint",
    attackSpeed: "vint",
    attackRange: "vint",
    build_cost: "vuint",
    demolition_refund: "vuint",
    gadget_id: "vuint",
    build_limit: "vuint",
    ban_dungeon_list: "vuint[]",
    isEnableRotate: "bool",
    initLevel: "vuint",
    needChessLevel: "vuint",
  },
}