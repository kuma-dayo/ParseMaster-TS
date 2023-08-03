import { ConfigDefault } from "../"

export const ReactionEnergyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    type: "ElementReactionType",
    minDurability: "float",
    maxDurability: "float",
    costRatio: "float",
    configID: "vuint",
    poolSize: "float",
    poolRevivePeriod: "float",
    poolReviveEnergy: "float",
    isPersistent: "bool",
    costPeriod: "float",
    dropProb: "vuint",
  },
}
