import { ConfigDefault } from "../"

export const MultiBadmintonShootMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    minInterval: "float",
    maxInterval: "float",
    extraShootInterval: "float",
    extraShootTag: "string[]",
    bullets: "MultiBadmintonBullet[]",
    tresBulletID: "vint",
    normalBulletID: "vint",
    traceBulletID: "vint",
    traceTarget: "string[]",
    perChangeWeight: "vint",
    born: "ConfigBornType",
  },
}
