import getConfig, { setConfig } from 'next/config'

function set(key: string, val: unknown) {
  const config = getConfig()
  setConfig({
    serverRuntimeConfig: {
      ...config.serverRuntimeConfig,
      [key]: val
    },
    publicRuntimeConfig: {
      ...config.publicRuntimeConfig,
      [key]: val
    },
  })
}

function get(key: string): unknown {
  const config = getConfig()
  return config.publicRuntimeConfig[key] ?? config.serverRuntimeConfig[key]
}

export default { set, get }

