import { EnumDefault } from "."

enum types {
  FreeRotationXY = 0,
  FreeRotationZ = 1,
  Switch = 2,
}

export const ProjectionGameGuideFinishType: EnumDefault = {
  __signed: true,
  types: types,
}
