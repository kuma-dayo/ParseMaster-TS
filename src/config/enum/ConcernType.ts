import { EnumDefault } from "."

enum types {
  AllExcludeGWGO = 0,
  CombatExcludeGWGO = 1,
  AllAvatars = 2,
  LocalAvatar = 3,
  LocalTeam = 4,
  AllTeams = 5,
  AllVehicle = 6,
  AllAvatarsOnVehicle = 7,
  LocalVehicle = 8,
}

export const ConcernType: EnumDefault = {
  __signed: true,
  types: types,
}