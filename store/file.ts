import path from 'path'
import fs from 'fs'

async function set(key: string, value: unknown) {
  const fileName = path.resolve(process.cwd(), '.file-cache', `${key}.json`);
  fs.writeFileSync(fileName, JSON.stringify(value))
}

function get(key: string) {
  try {
    const fileName = path.resolve(process.cwd(), '.file-cache', `${key}.json`);
    const data = fs.readFileSync(fileName, { encoding: 'utf8' })

    return JSON.parse(data)
  } catch (e) {
    console.info(`Can't get cache at ${key}`)
    throw e
  }
}

async function update(key: string, updateFn: () => Promise<unknown>) {
  try {
    const data = await updateFn()
    set(key, data)
  } catch (e) {
    console.info(`Could not update ${key}`, e)
  }
}

export default { get, set, update }