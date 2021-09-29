const memoryStore = require('./store/memory')
const fileSet = require('./store/file-set')
const toggles = require('./toggles')

const nextConfig = {
  redirects: async () => {
    const data = await toggles()

    memoryStore.set('nextConfigToggles', data)
    fileSet('nextConfigToggles', data)

    return []
  }
}

module.exports = nextConfig