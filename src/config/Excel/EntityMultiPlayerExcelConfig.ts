import { ConfigDefault } from "../"

export const EntityMultiPlayerExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    propPerVec: "EntityPropPerMpConfig[]",
    endureNumVec: "vuint[]",
    elementShieldPerVec: "float[]",
  },
}
