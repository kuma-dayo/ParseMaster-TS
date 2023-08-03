import { EnumDefault } from "."

enum types {
  PLATFORM_IOS = 0,
  PLATFORM_ANDROID = 1,
  PLATFORM_PC = 2,
  PLATFORM_PS4 = 3,
}

export const GuidePlatformType: EnumDefault = {
  __signed: true,
  types: types,
}
