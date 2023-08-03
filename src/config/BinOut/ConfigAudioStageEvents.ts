import { ConfigDefault } from "../"

export const ConfigAudioStageEvents: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vint",
    stageCreateEvents: "string[]",
    stageProgressEvents: "ConfigAudioStageProgressEvent[]",
    stageStartEvents: "string[]",
    stageMatureEvents: "string[]",
    stageTeleportEvents: "ConfigAudioStageProgressEvent[]",
    stageExitEvents: "string[]",
    stateValue: "string",
    stageCreateStateGroups: "ConfigAudioStateGroup[]",
    stageStartStateGroups: "ConfigAudioStateGroup[]",
    stageMatureStateGroups: "ConfigAudioStateGroup[]",
    stageExitStateGroups: "ConfigAudioStateGroup[]",
    stage_music_start_event: "ConfigWwiseString",
    stage_music_stop_event: "ConfigWwiseString",
  },
}
