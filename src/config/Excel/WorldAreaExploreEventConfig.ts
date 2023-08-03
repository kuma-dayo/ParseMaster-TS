import { ConfigDefault } from "../"

export const WorldAreaExploreEventConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    EventID: "vuint",
    SceneID: "vuint",
    AreaID: "vuint",
    EventType: "ExploreEventType",
    Param: "string[]",
    ExploreWeight: "vuint",
    rewardID: "vuint",
  },
}