import { ConfigDefault } from "../"

export const ConfigElementShield: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    row: "ElementType[]",
    shieldDamageRatiosMap: "map<ElementType,ConfigElementShieldResistance>",
  },
}
