const toggles = require('../toggles');
const fs = require('fs')
const path = require('path')

module.exports = async function set(key, value) {
  const fileName = path.resolve(__dirname, '.file-cache', `${key}.json`);
  fs.writeFileSync(fileName, JSON.stringify(value))
}