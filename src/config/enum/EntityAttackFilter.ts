import { EnumDefault } from "."

enum types {
  AllEntities = 0,
  OnlyWater = 1,
  OnlyGrass = 2,
  OnlyGrassAndWater = 3,
  IgnoreSceneProp = 4,
}

export const EntityAttackFilter: EnumDefault = {
  __signed: true,
  types: types,
}
