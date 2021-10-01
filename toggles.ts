import fetch from 'isomorphic-unfetch'

export default async function toggles() {
  const resp = await fetch('http://worldtimeapi.org/api/timezone/Europe/London')
  const data = await resp.json()
  return data as unknown
}