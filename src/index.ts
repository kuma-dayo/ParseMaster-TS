import { basename, dirname, join } from "path"
import { cwd } from "process"

import { glob } from "glob"
import JSONbig from "json-bigint"
import sourceMapSupport from "source-map-support"

import ConfigResolver from "./configResolver"
import { FileType } from "./FileType"
import PMLogger from "./logger"
import Parser from "./parser"
import { mkdir, writeFile } from "./utils/fileSystem"
sourceMapSupport.install()

const inputFolder = join(cwd(), "Data")
const outputFolder = join(cwd(), "Json")

const logger = PMLogger.getInstance()

let suc = 0
let fail = 0
let skip = 0

const parser = new Parser()

;(async () => {
  const start = performance.now()
  await parse(await glob(inputFolder + "/**/*", { nodir: true }))
  const done = performance.now()

  logger.info(`Completed in ${(done - start) / 1000}s`)
  logger.info(`Succeeded: ${suc} Failed: ${fail} Skip: ${skip} `)
})()

async function parse(files: string[]): Promise<void> {
  await Promise.all(
    files.map(async (file) => {
      const filePath = file
      const fileName = basename(filePath)

      if (fileName.startsWith(".")) return //cache File Skip

      try {
        const { className, mode, derivation } = ConfigResolver.resolve(filePath)
        logger.info(`parsing mode: ${FileType[mode]} file: ${fileName}`)
        const output = JSONbig.stringify(
          JSONbig.parse(await parser.parseFile(filePath, className, mode, derivation)),
          null,
          2
        )

        const fileOutputPath = filePath.replace(inputFolder, outputFolder).replace(".bin", "") + ".json"

        await mkdir(dirname(fileOutputPath), { recursive: true })
        await writeFile(fileOutputPath, output)

        logger.info(`parsing complete mode: ${FileType[mode]} file: ${fileName}`)

        suc++
      } catch (ex) {
        logger.error(`Failed to process ${fileName}: ${ex.stack ? ex.stack : ex.message}`)
        if ((ex.message as string).includes("not found")) skip++
        else fail++
      }
    })
  )
}
