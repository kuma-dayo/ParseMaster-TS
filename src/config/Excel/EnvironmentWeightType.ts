import { ConfigDefault } from ".."

export const EnvironmentWeightType: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    animalId: "vuint",
    entityType: "EntityType",
    weight: "vuint",
    aliveHourMap: "map<vuint,vuint>",
  },
}
