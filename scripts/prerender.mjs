import { readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const currentFile = fileURLToPath(import.meta.url)
const currentDir = dirname(currentFile)
const rootDir = resolve(currentDir, '..')
const distDir = resolve(rootDir, 'dist')
const distHtmlPath = resolve(distDir, 'index.html')
const serverEntryPath = resolve(distDir, 'server/entry-server.js')

const template = await readFile(distHtmlPath, 'utf8')
const { render } = await import(pathToFileURL(serverEntryPath).href)
const prerenderedApp = render()
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${prerenderedApp}</div>`,
)

await writeFile(distHtmlPath, html)
await rm(resolve(distDir, 'server'), { recursive: true, force: true })
