import { basename } from "path"

import { FileType } from "./FileType"

interface ConfigEntry {
  className: string
  mode: FileType
  derivation: boolean
}

export default class ConfigResolver {
  private static ConfigMap: { [key: string]: ConfigEntry } = {}

  static resolve(path: string): ConfigEntry {
    const config = Object.entries(ConfigResolver.ConfigMap).find(([key]) => path.includes(key))?.[1]

    if (!config || config.className === null) {
      const fileName = basename(path)
      if (fileName.endsWith("Data"))
        return { className: fileName.slice(0, -4), mode: FileType.Packed, derivation: false }
      if (path.includes("TextMap")) return { className: "", mode: FileType.TextMap, derivation: false }
    }

    return config || { className: null, mode: FileType.Single, derivation: false }
  }
}
