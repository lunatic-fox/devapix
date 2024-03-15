import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: { link: '/docs/getting-icons/theme', label: 'Getting icons: Theme' },
        currentDoc: '/docs/getting-info/icon',
        nextDoc: { link: '/docs/getting-info/tag', label: 'Getting info: Tag' }
      }}>
      <h2>
        Getting info: Icon
      </h2>
      <p>
        It is possible to get information, based on <Code ic='devicon.json' /> file, about the icon via <Code ic='project' /> response property. Also check the request values through <Code ic='request' /> if the properties to modify the icon are passed.
      </p>
      <Code c='@[connector]/info?[ICON_NAME]' />

      <ReqResExample reqs={[
        {
          request: 'info?nodejs',
          code: `
          {
            "project": {
              "version": "latest",
              "altnames": [],
              "iconVersions": [
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
              "color": "#5fa04e"
            },
            "request": {
              "name": "nodejs",
              "version": "original"
            }
          }`
        },
        {
          request: 'info?rust&v=p&c=blue&s=50',
          code: `
          {
            "project": {
              "version": "latest",
              "altnames": [
                "rustlang"
              ],
              "iconVersions": [
                "original",
                "line"
              ],
              "tags": [
                "programming",
                "language"
              ],
              "color": "#000"
            },
            "request": {
              "name": "rust",
              "version": "original",
              "color": "#0000FF",
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
