//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const ConfigGlobalAI: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    avatarMeleeSlotRadius: "float",
    avoidanceRadius: "float",
    avoidanceForce: "float",
    lod0: "float",
    lod1: "float",
    lod2: "float",
    sensingIgnoreCampIDs: "vuint[]",
    publicCDs: "map<string,ConfigPublicAISkillCD>",
    defaultWeatherNeuronMapping: "map<ConfigWeatherType,NeuronName[]>",
    useServerPathfinding: "bool",
  },
}
