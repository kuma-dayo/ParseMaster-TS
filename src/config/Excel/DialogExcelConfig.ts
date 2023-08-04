import { ConfigDefault } from ".."

export const DialogExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nextDialogs: "vuint[]",
    talkShowType: "TalkShowType",
    talkRole: "TalkRole",
    talkContentTextMapHash: "vuint",
    _HACK__5: "__HACK_",
    talkTitleTextMapHash: "vuint",
    talkRoleNameTextMapHash: "vuint",
    talkAssetPath: "string",
    talkAssetPath_Alter: "string",
    talkAudioName: "string",
    _HACK__11: "__HACK_",
    _HACK__12: "__HACK_",
    _HACK__13: "__HACK_",
    actionBefore: "string",
    actionWhile: "string",
    actionAfter: "string",
    showDuration: "float",
    groupId: "vuint",
    optionIcon: "string",
  },
}
