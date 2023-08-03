import { ConfigDefault } from "../"

export const HomeWorldNPCExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    furnitureID: "vuint",
    avatarID: "vuint",
    npcID: "vuint",
    talkIDs: "vuint[]",
    isNPC: "bool",
    headIcon: "string",
    frontIcon: "string",
    sideIcon: "string",
    quality: "QualityType",
    showNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
