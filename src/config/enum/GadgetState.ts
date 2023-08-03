import { EnumDefault } from "."

enum types {
  Default = 0,
  GatherDrop = 1,
  ChestLocked = 101,
  ChestOpened = 102,
  ChestTrap = 103,
  ChestBramble = 104,
  ChestFrozen = 105,
  ChestRock = 106,
  ExcitedState = 200,
  GearStart = 201,
  GearStop = 202,
  GearAction1 = 203,
  GearAction2 = 204,
  DestroyState = 300,
  CrystalResonate1 = 301,
  CrystalResonate2 = 302,
  CrystalExplode = 303,
  CrystalDrain = 304,
  StatueActive = 401,
  Action01 = 901,
  Action02 = 902,
  Action03 = 903,
}

export const GadgetState: EnumDefault = {
  __signed: true,
  types: types,
}
