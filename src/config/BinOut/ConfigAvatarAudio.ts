import { ConfigDefault } from ".."

export const ConfigAvatarAudio: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigCharacterAudio",
  Fields: {
    moveStateAudio: "ConfigMoveStateAudio",
    combatSpeech: "ConfigCombatSpeech",
    voiceSwitch: "ConfigWwiseString",
    bodyTypeSwitch: "ConfigWwiseString",
    listenerLiftup: "float",
    surfaceProberLiftup: "float",
  },
}
