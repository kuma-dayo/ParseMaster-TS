import { ConfigDefault } from ".."

export const HomeWorldAreaComfortExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    configID: "vuint",
    sceneID: "vuint",
    areaID: "vuint",
    areaType: "HomeWorldAreaType",
    nameTextMapHash: "vuint",
    maxComfort: "vuint",
    safePointStr: "string",
    playerSafePointStr: "string",
    lowLoadLimit: "vuint",
    middleLoadLimit: "vuint",
    highLoadLimit: "vuint",
    areaCenterPos: "float[]",
    areaCenterRot: "float[]",
    blueprintSafePointStr: "string",
    BJPDBCFPKBH: "vuint",
    FACHJBMMNHF: "string",
  },
}
