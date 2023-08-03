import { ConfigDefault } from "../"

export const ConfigCoopInteractionGroup: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vuint",
    coopMap: "map<vuint,ConfigCoopBaseNode>",
    startNodeId: "vuint",
    failNodeId: "vuint",
  },
}
