import { ConfigDefault } from ".."

export const ConfigMarkGlobal: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    markIconConfig: "map<MarkIconType,ConfigMarkIcon>",
    customMarkIcons: "MarkIconType[]",
    sceneBuildingMarks: "map<SceneBuildingType,MarkIconType>",
    markOrderToLayerMap: "map<MarkOrder,vint>",
  },
}
