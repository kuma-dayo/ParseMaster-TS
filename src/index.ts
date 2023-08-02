import { readdirSync } from "fs"
import { dirname, join } from "path"
import { cwd } from "process"

import JSONbig from "json-bigint"

import ConfigResolver from "./configResolver"
import { FileType } from "./FileType"
import PMLogger from "./logger"
import Parser from "./parser"
import { mkdir, writeFile } from "./utils/fileSystem"
const inputFolder = join(cwd(), "Data")
const outputFolder = join(cwd(), "Json")

const logger = PMLogger.getInstance()

let suc = 0
let fail = 0

;(async () => {
  const start = performance.now()

  await parse(inputFolder)

  const done = performance.now()

  logger.info(`Completed in ${(done - start) / 1000}s`)
  logger.info(`Succeeded: ${suc} Failed: ${fail} `)
})()

async function parse(input: string): Promise<void> {
  const dirContents = readdirSync(input, { withFileTypes: true })
  const files = dirContents.filter((entry) => entry.isFile())
  const dirs = dirContents.filter((entry) => entry.isDirectory())

  await Promise.all(
    files.map(async (file) => {
      const filePath = join(input, file.name)

      if (file.name.startsWith(".")) return //cache File Skip

      try {
        const parser = new Parser()
        const { className, mode, derivation } = ConfigResolver.resolve(filePath)
        const output = parser.parseFile(filePath, className, mode, derivation)
        const fileOutputPath = filePath.replace(inputFolder, outputFolder).replace(".bin", "") + ".json"

        await mkdir(dirname(fileOutputPath), { recursive: true })
        await writeFile(fileOutputPath, JSONbig.stringify(JSONbig.parse(output), null, 2))

        logger.info(`finished Parse mode: ${FileType[mode]} file: ${file.name}`)
        suc++
      } catch (ex) {
        logger.error(`Failed to process ${file.name}: ${ex.message}`)
        fail++
      }
    })
  )

  await Promise.all(
    dirs.map(async (subDir) => {
      const subDirPath = join(input, subDir.name)
      await parse(subDirPath)
    })
  )
}
