import { EnumDefault } from "."

enum types {
  VISION_LEVEL_NORMAL = 0,
  VISION_LEVEL_LITTLE_REMOTE = 1,
  VISION_LEVEL_REMOTE = 2,
  VISION_LEVEL_SUPER = 3,
  VISION_LEVEL_NEARBY = 4,
  VISION_LEVEL_SUPER_NEARBY = 5,
  VISION_LEVEL_NUM = 6,
}

export const VisionLevelType: EnumDefault = {
  __signed: true,
  types: types,
}
