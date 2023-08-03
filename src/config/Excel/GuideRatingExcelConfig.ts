import { ConfigDefault } from "../"

export const GuideRatingExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    channelID: "vuint",
    subChannelId: "vuint",
    isChinaServer: "bool",
    platform: "GuidePlatformType",
    url: "string",
  },
}
