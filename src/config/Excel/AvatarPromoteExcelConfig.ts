import { ConfigDefault } from "../"

export const AvatarPromoteExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    avatarPromoteId: "vuint",
    promoteLevel: "vuint",
    promoteAudio: "string",
    scoinCost: "vuint",
    costItems: "IdCountConfig[]",
    unlockMaxLevel: "vuint",
    addProps: "PropValConfig[]",
    requiredPlayerLevel: "vuint",
  },
}