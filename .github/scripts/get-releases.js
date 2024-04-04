const fs = require('fs')

let releases = []
fetch('https://api.github.com/repos/devicons/devicon/releases').then(data => {
  data.json().then(d => {
    d.forEach(e => {
      releases.push(e.tag_name)
    })

    releases = releases.filter(e => !e.match(/^v[12]\.[0-6]$/)).map(e => e.replace('v', ''))

    async function rls() {
      const rVersions = []
      const pvs = {}

      for (const r of releases) {
        const req = await (await fetch(`https://cdn.jsdelivr.net/gh/devicons/devicon@${r}/devicon.json`)).json()
        rVersions.push({v: r, i: req.map(e => e.name)})
      }

      rVersions.forEach(rv => {
        rv.i.forEach(icon => {
          if (!pvs[icon]) pvs[icon] = []
          pvs[icon].push(rv.v)
        })
      })

      const dataPath = './res'
      if (!fs.existsSync(dataPath))
        fs.mkdirSync(dataPath)

      fs.writeFileSync(`${dataPath}/releases.json`, JSON.stringify(pvs, null, 2))
    }

    rls()
  })
})
