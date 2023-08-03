import { EnumDefault } from "."

enum types {
  BigWorld = 0,
  HomeWorld = 1,
  Islands = 2,
  Abyssalisle = 3,
  MichiaeMatsuri = 4,
  TheChasm = 5,
  DreamIsland = 6,
  MirrorWorld = 7,
  CattailTavern = 8,
}

export const MapTagType: EnumDefault = {
  __signed: true,
  types: types,
}
