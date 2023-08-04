import { ConfigDefault } from ".."

export const MaterialSourceDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dungeonList: "vuint[]",
    jumpList: "SourceJumpConfig[]",
    dungeonGroup: "vuint[]",
    jumpTargets: "string[]",
    jumpParams: "vuint[]",
    jumpDescs: "vuint[]",
    textList: "vuint[]",
  },
}
