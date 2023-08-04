import { ConfigDefault } from ".."

export const MusicInfoConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    musicID: "vuint",
    musicTime: "vuint",
    levelId: "vuint[]",
    musicNameTextMapHash: "vuint",
    musicDescTextMapHash: "vuint",
    markNameTextMapHash: "vuint",
    markDescTextMapHash: "vuint",
    condID: "vuint",
    watcherList: "vuint[]",
    avatarID: "vuint",
    pointID: "vuint",
    instrumentID: "vuint",
    avatarInstrumentID: "vuint",
  },
}
