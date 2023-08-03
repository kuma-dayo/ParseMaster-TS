import { EnumDefault } from "."

enum types {
  Interior = 0,
  Exterior = 1,
  Interior_Room = 2,
  Interior_Hall = 3,
  SkyBox = 4,
}

export const FurnitureDeployType: EnumDefault = {
  __signed: true,
  types: types,
}
