function set(key, value) {
  process.env[key] = JSON.stringify(value)
}

function get(key) {
  return process.env[key]
}

module.exports = { set, get }