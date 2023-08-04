import { ConfigDefault } from ".."

export const TeamResonanceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "BaseTalentConfig",
  Fields: {
    teamResonanceId: "vuint",
    teamResonanceGroupId: "vuint",
    level: "vuint",
    fireAvatarCount: "vuint",
    waterAvatarCount: "vuint",
    grassAvatarCount: "vuint",
    electricAvatarCount: "vuint",
    iceAvatarCount: "vuint",
    windAvatarCount: "vuint",
    rockAvatarCount: "vuint",
    cond: "TeamResonanceCondType",
    minTotalPromoteLevel: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
