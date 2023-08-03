import { ConfigDefault } from "../"

export const FindHilichurlHiliWeiExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dayIndex: "vuint",
    durationHint: "string",
    groupId: "vuint",
    positionCenter: "float[]",
    positionRadius: "vuint",
    watcherID: "vuint",
  },
}
