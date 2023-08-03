import { ConfigDefault } from "../"

export const DigGroupLinkExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    stage: "vuint",
    groupLinkBundleId: "vuint",
    groupLinkBundleId2: "vuint",
    groupLinkChangeCond: "vuint",
    areaNameTextMapHash: "vuint",
    watcherID: "vuint[]",
    background: "string",
  },
}
