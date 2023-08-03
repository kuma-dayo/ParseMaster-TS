import { ConfigDefault } from "../"

export const DeliveryQuestConfig: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    parentQuestId: "vuint",
    deliveryQuestId: "vuint",
    startQuestId: "vuint",
    talkQuestId: "vuint",
    watcherId: "vuint[]",
    itemId: "vuint",
  },
}
