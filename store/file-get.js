module.exports = function get(key) {
  try {
    const data = require(`./.file-cache/${key}.json`)
    return data
  } catch {
    console.info(`No cache at ${key}`)
  }
}
