import memoryStore from '../store/memory'
import fileGet from '../store/file-get'

const IndexPage = () => (
  <>
    <h1>Stores</h1>

    <h2>Memory</h2>
    <pre>{JSON.stringify(Array.from(memoryStore.entries()))}</pre>
    <pre>{JSON.stringify(memoryStore.get('serverToggles'))}</pre>
    <pre>{JSON.stringify(memoryStore.get('nextConfigToggles'))}</pre>
    <p><b>Note:</b> nextConfigtoggles or serverToggles isn't set on the memoryStore here as it was set in the node context, not the next app</p>

    <h2>File</h2>
    <pre>{JSON.stringify(fileGet("serverToggles"))}</pre>
    <pre>{JSON.stringify(fileGet("nextConfigToggles"))}</pre>
    <p><b>Note:</b> both serverToggles and nextConfigToggles are available as they are written to disk at startup, and then available as JSON imports in the next app</p>
  </>
)

export default IndexPage