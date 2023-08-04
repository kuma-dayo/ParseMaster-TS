import { ConfigDefault } from ".."

export const MichiaeErosionMapExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    erosionRange: "vuint[]",
    erosionDescTextMapHash: "vuint",
    energyDescTextMapHash: "vuint",
  },
}
