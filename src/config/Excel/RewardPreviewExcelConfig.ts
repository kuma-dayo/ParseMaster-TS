import { ConfigDefault } from ".."

export const RewardPreviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    Desc: "string",
    previewItems: "IdCountStrConfig[]",
  },
}
