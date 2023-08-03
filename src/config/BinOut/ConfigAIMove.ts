import { ConfigDefault } from "../"

export const ConfigAIMove: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    enable: "bool",
    moveCategory: "MoveCategoryAI",
    useNavMesh: "bool",
    useToTheMoon: "bool",
    navMeshAgentName: "string",
    almostReachedDistanceWalk: "float",
    almostReachedDistanceRun: "float",
    snakelikeMoveSetting: "ConfigAISnakelikeMove",
    length: "float",
  },
}
