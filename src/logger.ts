import Logger, { LoggerOptions } from "@ptkdev/logger"

export default class PMLogger {
  static instance: Logger
  static option: LoggerOptions = {
    language: "en",
    colors: true,
    debug: true,
    info: true,
    warning: true,
    error: true,
    sponsor: true,
    write: false,
    type: "log",
    rotate: {
      size: "10M",
      encoding: "utf8",
    },
  }

  static getInstance(): Logger {
    if (!PMLogger.instance) PMLogger.instance = new Logger(PMLogger.option)
    return PMLogger.instance
  }
}
