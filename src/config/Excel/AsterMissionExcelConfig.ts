import { ConfigDefault } from "../"

export const AsterMissionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    missionId: "vuint",
    phase: "vuint",
    watcherId: "vuint",
    transPointId: "vuint",
    tracePoint: "string",
    perfabPathHash: "vuint",
  },
}
