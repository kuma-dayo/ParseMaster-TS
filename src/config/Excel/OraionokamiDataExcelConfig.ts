import { ConfigDefault } from ".."

export const OraionokamiDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    configId: "vuint",
    gadgetChainId: "vuint",
    gadgetChainLevel: "vuint",
    serverBuffId: "vuint",
    descIdList: "vuint[]",
    descTitleTextMapHash: "vuint",
    descContentTextMapHash: "vuint",
    descSkillTextMapHash: "vuint",
    groupId: "vuint",
    typeLevel: "vuint",
    iconPath: "string",
  },
}
