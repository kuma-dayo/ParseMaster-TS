import { EnumDefault } from "."

enum types {
  Land = 0,
  Amphibious = 1,
  Water = 2,
  AirLandAmphibious = 3,
  Air = 4,
}

export const MoveCategoryAI: EnumDefault = {
  __signed: true,
  types: types,
}
