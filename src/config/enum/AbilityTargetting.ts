import { EnumDefault } from "."

enum types {
  Self = 0,
  Caster = 1,
  Target = 2,
  SelfAttackTarget = 3,
  Other = 4,
  Applier = 5,
  Owner = 6,
  CurTeamAvatars = 7,
  CurLocalAvatar = 8,
  OriginOwner = 9,
  Team = 10,
  TargetOwner = 11,
  TargetOriginOwner = 12,
  AllPlayerAvatars = 13,
  AllTeams = 14,
  RemoteTeams = 15,
  TargetTeam = 16,
  CasterOwner = 17,
  CasterOriginOwner = 18,
  MPLevel = 19,
  Vehicle = 20,
  PropOwner = 21,
  ApplierOriginOnwer = 22,
  TargetTeam__WTF__ = 23,
}

export const AbilityTargetting: EnumDefault = {
  __signed: true,
  types: types,
}
