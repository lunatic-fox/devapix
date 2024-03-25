const RELEASES = [
  '2.7', 
  '2.8.0',
  '2.8.1',
  '2.8.2',
  '2.9.0',
  '2.10.0',
  '2.10.1',
  '2.11.0',
  '2.12.0',
  '2.13.0',
  '2.14.0',
  '2.15.0',
  '2.15.1',
  '2.16.0',
]

export default async function findProjectVersion(/* iconName: string */) {
  const rVersions: {v: string, i: string[]}[] = []

  for (const r of RELEASES) {
    const req = await (await fetch(`https://cdn.jsdelivr.net/gh/devicons/devicon@${r}/devicon.json`)).json()
    rVersions.push({v: r, i: req.map((e: { name: string }) => e.name)})
  }

  const pvs: {[k: string]: string[]} = {}
  rVersions.forEach(rv => {
    rv.i.forEach(icon => {
      if (!pvs[icon]) pvs[icon] = []
      pvs[icon].push(rv.v)
    })
  })

  return pvs//[iconName]
}

