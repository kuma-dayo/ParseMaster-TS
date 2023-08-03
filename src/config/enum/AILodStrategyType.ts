import { EnumDefault } from "."

enum types {
  Best = 0,
  Npc = 1,
  Monster = 2,
  MinorAnimal = 3,
  MonsterVista = 4,
  Count = 5,
}

export const AILodStrategyType: EnumDefault = {
  __signed: true,
  types: types,
}
