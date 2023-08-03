import { ConfigDefault } from "../"

export const WidgetActiveExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    materialID: "vuint",
    isGuestCanActivate: "bool",
    activeGallery: "vuint[]",
    activeRegion: "string",
    activeScene: "vuint[]",
    activeCity: "vuint[]",
  },
}
