//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const MusicGameBasicConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    musicID: "vuint",
    musicLevel: "vuint",
    jsonPath: "string",
    longPressInterval: "vuint",
    longPressDownSpeed: "float",
    longPressPreTime: "vuint",
    successPrePoint: "float",
    successLatePoint: "float",
    scaleTime: "vuint",
    lateDropTime: "vuint",
    scaleRange: "float",
    scoreLevelList: "vuint[]",
    scoreOneKey: "vuint",
    scoreGreat: "vuint",
    scoreLongPress: "vuint",
    bpm: "float",
    bpmDict: "map<vuint,float>",
    ugcBeatDivisionOptions: "vuint[]",
    ugcDefaultBeatDivision: "vuint",
    simpleHintJsonPath: "string",
    complexHintJsonPath: "string",
    noteCount: "vuint",
    comboConfig: "ComboConfig[]",
    unlockTipsTextMapHash: "vuint",
    soloConfig: "SoloConfig[]",
  },
}
