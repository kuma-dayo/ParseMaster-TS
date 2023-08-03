import { ConfigDefault } from "../"

export const ConfigTile: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    tileName: "string",
    campID: "vuint",
    specialType: "TileSpecialType",
    fixedY: "float",
    poolSize: "vint",
    initialElements: "ConfigTileElement[]",
    basicAction: "ConfigMassiveElementTriggerAction",
    fieldMapMaterial: "string",
    effectMaterial: "string",
  },
}