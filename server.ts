import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import toggles from './toggles'
import memoryStore from './store/memory'
import fileStore from './store/file'
import envStore from './store/env'
import configStore from './store/config'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  const data = await toggles()


  memoryStore.set('toggles', data)
  envStore.set('toggles', data.toString())
  configStore.set('toggles', data)

  fileStore.set('toggles', data)
  setInterval(() => fileStore.update('toggles', toggles), 1000)

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