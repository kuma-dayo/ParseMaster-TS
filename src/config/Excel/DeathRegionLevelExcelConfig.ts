import { ConfigDefault } from ".."

export const DeathRegionLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    deathZoneLevel: "vuint",
    baseErosion: "float",
    erosionRate: "float",
  },
}
