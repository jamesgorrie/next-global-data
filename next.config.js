// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  redirects: async () => {
    // const data = await toggles()
    // this.publicRuntimeConfig = {data}

    return []
  },
}

module.exports = nextConfig