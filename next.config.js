const memoryStore = require('./store/memory')
const fileSet = require('./store/file-set')
const envStore = require('./store/env')
const toggles = require('./toggles')
const { setConfig } = require('next/config')

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  redirects: async () => {
    const data = await toggles()

    memoryStore.set('nextConfigToggles', data)
    fileSet('nextConfigToggles', data)
    envStore.set('nextConfigToggles', data)

    setConfig({
      serverRuntimeConfig: {
        nextConfigToggles: JSON.stringify(data)
      },
      publicRuntimeConfig: {
        nextConfigToggles: JSON.stringify(data)
      },
    })

    return []
  },
  publicRuntimeConfig: {
    toggles
  }
}

module.exports = nextConfig