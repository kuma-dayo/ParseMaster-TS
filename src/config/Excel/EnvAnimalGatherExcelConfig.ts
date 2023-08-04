import { ConfigDefault } from ".."

export const EnvAnimalGatherExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    animalId: "vuint",
    areaId: "vuint",
    entityType: "EntityType",
    gatherItemList: "IdCountConfig[]",
    escapeRadius: "vuint",
    escapeTime: "vuint",
    aliveTime: "vuint",
    excludeWeathers: "string",
  },
}
