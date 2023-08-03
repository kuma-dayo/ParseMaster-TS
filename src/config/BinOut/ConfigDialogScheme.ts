import { ConfigDefault } from "../"

export const ConfigDialogScheme: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vuint",
    nextDialogs: "vuint[]",
    talkShowType: "TalkShowType",
    talkRole: "TalkRoleEx",
    talkContentTextMapHash: "vuint",
    talkTitleTextMapHash: "vuint",
    talkRoleNameTextMapHash: "vuint",
    talkAssetPath: "string",
    talkAssetPath_Alter: "string",
    talkAudioName: "string",
    actionBefore: "string",
    actionWhile: "string",
    actionAfter: "string",
    showDuration: "float",
    optionIcon: "string",
  },
}
