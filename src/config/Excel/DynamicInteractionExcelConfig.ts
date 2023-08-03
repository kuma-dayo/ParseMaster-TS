import { ConfigDefault } from "../"

export const DynamicInteractionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    selfContentTextMapHash: "vuint",
    selfContent1TextMapHash: "vuint",
    selfInteeIconName: "string",
    otherContentTextMapHash: "vuint",
    otherInteeIconName: "string",
    otherCanIntee: "bool",
  },
}
