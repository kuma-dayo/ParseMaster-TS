import { ConfigDefault } from "../"

export const OutputSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    name: "string",
    bus: "ConfigWwiseString",
    channelMask: "vuint",
    busChannelConfigList: "BusChannelConfig[]",
  },
}
