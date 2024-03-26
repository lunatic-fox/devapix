export default async function getProjectVersions() {
  return await (await fetch('/api/info/releases')).json()
}
