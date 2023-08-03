import { EnumDefault } from "."

enum types {
  CPU = 0,
  Memory = 1,
  GPUMemory = 2,
  GPU = 3,
  General = 4,
  BinaryDefault = 5,
  DeviceSpecific = 6,
  Invalid = 7,
}

export const PerfRatingCategory: EnumDefault = {
  __signed: true,
  types: types,
}
