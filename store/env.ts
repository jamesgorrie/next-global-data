function set(key: string, value: string) {
  process.env[`NEXT_PUBLIC_${key}`] = JSON.stringify(value)
}

function get(key: string): string {
  return process.env[`NEXT_PUBLIC_${key}`]
}

export default { set, get }