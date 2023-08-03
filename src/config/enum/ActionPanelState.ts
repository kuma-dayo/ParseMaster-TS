import { EnumDefault } from "."

enum types {
  Normal = 0,
  Jump = 1,
  Climb = 2,
  Fly = 3,
  Aim = 4,
  FastAim = 5,
  Swim = 6,
  Ladder = 7,
  Squat = 8,
  CombatAir = 9,
  Perform = 10,
  CloseAll = 11,
}

export const ActionPanelState: EnumDefault = {
  __signed: true,
  types: types,
}
