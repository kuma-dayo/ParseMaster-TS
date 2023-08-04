import { ConfigDefault } from ".."

export const ConfigJob: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    isForceMainThread: "bool",
    scheduleJobType: "ConfigScheduleJobType",
    scheduleType: "ConfigSchedulerType",
    maxNodeNum: "vint",
    groupId: "vint",
  },
}
