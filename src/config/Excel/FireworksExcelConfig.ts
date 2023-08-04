import { ConfigDefault } from ".."

export const FireworksExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    materialID: "vuint",
    reformParamList: "FireworksReformParamConfig[]",
    fireworksType: "FireworksType",
    liftOffEffectName: "string",
    explodeEffectName: "string",
    detailedDescTextMapHash: "vuint",
  },
}
