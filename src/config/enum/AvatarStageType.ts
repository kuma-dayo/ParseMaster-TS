import { EnumDefault } from "."

enum types {
  Both = 0,
  Current = 1,
  OffStage = 2,
}

export const AvatarStageType: EnumDefault = {
  __signed: true,
  types: types,
}
