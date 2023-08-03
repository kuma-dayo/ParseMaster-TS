import { ConfigDefault } from "../"

export const DragonSpineMissionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chapterId: "vuint",
    watcherId: "vuint",
    finishExec: "DragonSpineMissionFinishConfig[]",
  },
}
