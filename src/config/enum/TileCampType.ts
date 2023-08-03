import { EnumDefault } from "."

enum types {
  Enviro = 0,
  FixCampID = 1,
  OwnerCamp = 2,
}

export const TileCampType: EnumDefault = {
  __signed: true,
  types: types,
}
