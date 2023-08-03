import { ConfigDefault } from "../"

export const ExhibitionListExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    defaultShow: "bool",
    displayId: "vuint",
    seriesID: "vuint",
    displayTitleTextMapHash: "vuint",
    displayFormatTextMapHash: "vuint",
    displayType: "ExhibitionListDisplayType",
  },
}
