import memoryStore from '../store/memory'
import fileGet from '../store/file-get'
import envStore from '../store/env'
import getConfig from 'next/config'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
const { publicRuntimeConfig } = getConfig()


export const getServerSideProps: GetServerSideProps = async (context) => {
  const memoryToggles = memoryStore.get('toggles')
  const fileToggles = fileGet('toggles')
  const envToggles = envStore.get("toggles")
  const configToggles = publicRuntimeConfig
  return {
    props: JSON.parse(JSON.stringify({
      memoryToggles,
      fileToggles,
      envToggles,
      configToggles,
    }))
  }
}

const IndexPage = (props) => {
  const [memoryToggles, setMemoryToggles] = useState()
  const [fileToggles, setFileToggles] = useState()
  const [envToggles, setEnvToggles] = useState()
  const [configToggles, setConfigToggles] = useState()

  useEffect(() => {
    setMemoryToggles(memoryStore.get('toggles'))
    setFileToggles(fileGet('toggles'))
    setEnvToggles(envStore.get("toggles"))
    setConfigToggles(publicRuntimeConfig)
  }, [])
  return (
    <>
      <h1>Stores</h1>

      <h2>getServerSideProps</h2>
      <pre>{JSON.stringify(props)}</pre>

      <h2>Memory</h2>
      <h3>Server</h3>
      <pre>{JSON.stringify(memoryStore.get('toggles'))}</pre>
      <h3>Client</h3>
      <pre>{JSON.stringify(memoryToggles)}</pre>
      <hr />

      <h2>File</h2>
      <h3>Server</h3>
      <pre>{JSON.stringify(fileGet("toggles"))}</pre>
      <h3>Client</h3>
      <pre>{JSON.stringify(fileToggles)}</pre>

      <hr />

      <h2>Env</h2>
      <h3>Server</h3>
      <pre>{JSON.stringify(envStore.get("toggles"))}</pre>
      <h3>Client</h3>
      <pre>{JSON.stringify(envToggles)}</pre>
      <hr />

      <h2>configToggles</h2>
      <h3>Server</h3>
      <pre>{JSON.stringify(publicRuntimeConfig.toggles)}</pre>
      <h3>Client</h3>
      <pre>{JSON.stringify(configToggles)}</pre>
    </>
  )
}

export default IndexPage