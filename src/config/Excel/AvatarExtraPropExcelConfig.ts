import { ConfigDefault } from ".."

export const AvatarExtraPropExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    extra_props: "ExtraPropConfig[]",
    maxCount: "vuint",
  },
}
