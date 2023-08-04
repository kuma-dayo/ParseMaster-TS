import { ConfigDefault } from ".."

export const ItemConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    icon: "string",
    itemType: "ItemType",
    weight: "vuint",
    rank: "vuint",
    gadgetId: "vuint",
    dropable: "bool",
    useLevel: "vuint",
    globalItemLimit: "vuint",
  },
}
