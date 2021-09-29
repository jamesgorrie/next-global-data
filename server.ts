import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import toggles from './toggles'
import memoryStore from './store/memory'
import fileSet from './store/file-set'
import envStore from './store/env'
import { setConfig } from 'next/config'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  const data = await toggles()

  memoryStore.set('serverToggles', data)
  fileSet('serverToggles', data)
  envStore.set('serverToggles', data)

  setConfig({
    serverRuntimeConfig: {
      serverToggles: JSON.stringify(data)
    },
    publicRuntimeConfig: {
      serverToggles: JSON.stringify(data)
    },
  })

  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, () => {
    console.log('> Ready on http://localhost:3000')
  })
})

export default {}