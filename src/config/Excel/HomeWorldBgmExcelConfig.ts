import { ConfigDefault } from ".."

export const HomeWorldBgmExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    bgmID: "vuint",
    isDefaultUnlock: "bool",
    isRoomSceneUsable: "bool",
    isWorldSceneUsable: "bool",
    cityId: "vuint",
    sortOrder: "vuint",
    bgmPath: "string",
    bgmNameTextMapHash: "vuint",
  },
}
