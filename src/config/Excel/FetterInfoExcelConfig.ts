import { ConfigDefault } from ".."

export const FetterInfoExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "FetterConfig",
  Fields: {
    isHiden: "bool",
    infoBirthMonth: "vuint",
    infoBirthDay: "vuint",
    avatarNativeTextMapHash: "vuint",
    avatarVisionBeforTextMapHash: "vuint",
    avatarConstellationBeforTextMapHash: "vuint",
    avatarTitleTextMapHash: "vuint",
    avatarDetailTextMapHash: "vuint",
    avatarAssocType: "AssocType",
    cvChineseTextMapHash: "vuint",
    cvJapaneseTextMapHash: "vuint",
    cvEnglishTextMapHash: "vuint",
    cvKoreanTextMapHash: "vuint",
    avatarVisionAfterTextMapHash: "vuint",
    avatarConstellationAfterTextMapHash: "vuint",
  },
}
