import { EnumDefault } from "."

enum types {
  LocalAvatar = 0,
  LocalAvatarSyncedLocation = 1,
  LocalAvatarAuthority = 2,
  TargetEntity = 3,
  GroupGadgetEntity = 4,
  GroupMonsterEntity = 5,
  NpcEntity = 6,
}

export const FollowTarget: EnumDefault = {
  __signed: true,
  types: types,
}
