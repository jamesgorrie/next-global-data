import { GetServerSideProps } from 'next'
import memoryStore from '../store/memory'
import fileStore from '../store/file'
import envStore from '../store/env'
import configStore from '../store/config'
import { Fragment } from 'react'

type Props = {
  memoryToggles: unknown
  fileToggles: unknown
  envToggles: unknown
  configToggles: unknown
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // I set `null` here so it comes through in the props
  const memoryToggles = memoryStore.get('toggles') ?? null
  const fileToggles = fileStore.get('toggles') ?? null
  const envToggles = envStore.get("toggles") ?? null
  const configToggles = configStore.get("toggles") ?? null

  return {
    props: {
      memoryToggles,
      fileToggles,
      envToggles,
      configToggles,
    }
  }
}

const IndexPage = (props: Props) => {
  return (
    <>
      <h1>Stores</h1>

      {Object.entries(props).map(([key, val]) => {
        return (
          <Fragment key={key}>
            <h2 key={key}>{key}</h2>
            <pre>{JSON.stringify(val)}</pre>
          </Fragment>
        )
      })}
    </>
  )
}

export default IndexPage