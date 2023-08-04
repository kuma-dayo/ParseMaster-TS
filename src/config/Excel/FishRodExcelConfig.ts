import { ConfigDefault } from ".."

export const FishRodExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    baseAttack: "float",
    attackAcc: "float",
    maxAttack: "float",
    cityId: "vuint",
    attackMag: "float",
  },
}
