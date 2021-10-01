const toggles = require('../toggles');
const fs = require('fs')
const path = require('path')

async function set(key: string, value: unknown) {
  const fileName = path.resolve(__dirname, '.file-cache', `${key}.json`);
  fs.writeFileSync(fileName, JSON.stringify(value))
}

export default set