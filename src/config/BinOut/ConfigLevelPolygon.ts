import { ConfigDefault } from ".."

export const ConfigLevelPolygon: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    localPolygonId: "vuint",
    yMax: "float",
    yMin: "float",
    vertices: "Vector[]",
    tags: "ConfigLevelPolygonTag[]",
  },
}
