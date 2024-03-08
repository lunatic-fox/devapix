import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDocHref: '/docs/getting-icons/theme',
        currentDocHref: '/docs/getting-info/icon',
        nextDocHref: '/docs/getting-info/tag'
      }}>
      <h2>
        Getting Info: Icon
      </h2>
      <p>
        It is possible to get information, based on <Code ic='devicon.json' /> file, about the icon via <Code ic='project' /> response property. Also check the request values through <Code ic='iconRequest' /> if the properties to modify the icon are passed.
      </p>
      <Code c='@[connector]/info/[ICON_NAME]' />

      <ReqResExample reqs={[
        {
          request: 'info/nodejs',
          code: `
            {
              "project": {
                "version": "latest",
                "altnames": [],
                "actualIconVersions": [
                  "original",
                  "plain",
                  "line",
                  "original-wordmark",
                  "plain-wordmark",
                  "line-wordmark"
                ],
                "tags": [
                  "javascript",
                  "language"
                ],
                "defaultColor": "#5fa04e"
              },
              "iconRequest": {
                "name": "nodejs",
                "version": "original",
                "color": null,
                "theme": null,
                "size": 128
              }
            }`
        },
        {
          request: 'info/rust,v:p,c:blue,s:50',
          code: `
            {
              "project": {
                "version": "latest",
                "altnames": [
                  "rustlang"
                ],
                "actualIconVersions": [
                  "original",
                  "line"
                ],
                "tags": [
                  "programming",
                  "language"
                ],
                "defaultColor": "#000"
              },
              "iconRequest": {
                "name": "rust",
                "version": "original",
                "color": "#0000FF",
                "theme": null,
                "size": 50
              }
            }`
        }
      ]} />
      <p>
        Notice in <Code ic='rust' /> info request that the <Code ic='version' /> property refers to <Code ic='plain' /> icon version, but since this icon version is not present into the latest project version, the API request points to <Code ic='original' /> icon version instead. Also CSS color is automatically converted to its corresponding hexadecimal color.
      </p>
    </Docs>
  )
}
