const fetch = require('isomorphic-unfetch')

module.exports = async function () {
  const resp = await fetch('https://toggles.wellcomecollection.org/toggles.json')
  const data = await resp.json()
  return data
}