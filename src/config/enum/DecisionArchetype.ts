import { EnumDefault } from "."

enum types {
  General = 0,
  Cicin = 1,
  Animal = 2,
  Dahaka = 3,
  Animal_Homeworld = 4,
  Animal_Fishable = 5,
  Animal_Ray = 6,
  PlayerAuto = 100,
}

export const DecisionArchetype: EnumDefault = {
  __signed: true,
  types: types,
}
