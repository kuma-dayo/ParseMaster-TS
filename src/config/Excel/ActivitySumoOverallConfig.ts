import { ConfigDefault } from ".."

export const ActivitySumoOverallConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    scheduleId: "vuint",
    prerequisiteQuestId: "vuint",
    leadQuestId: "vuint",
    rewardPreviewId: "vuint",
    dungeonEntryId: "vuint",
    globalWatcherId: "vuint",
    pushTipsId: "vuint",
    teamNum: "vuint",
    maxTeamMemberNum: "vuint",
    teamSelectableSkillNum: "vuint",
    switchTeamCD: "vuint",
  },
}
