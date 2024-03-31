import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: {
          link: 'getting-icons/theme',
          label: 'Getting icons: Theme'
        },
        currentDoc: 'getting-info/icon',
        nextDoc: {
          link: 'getting-info/tag',
          label: 'Getting info: Tag'
        }
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
          request: 'info?elixir',
          code: `
          {
            "project": {
              "version": "latest",
              "releases": [
                "2.10.0",
                "2.10.1",
                "2.11.0",
                "2.12.0",
                "2.13.0",
                "2.14.0",
                "2.15.0",
                "2.15.1",
                "2.16.0"
              ],
              "altnames": [
                "elexirlang"
              ],
              "iconVersions": [
                "original",
                "plain",
                "original-wordmark",
                "plain-wordmark"
              ],
              "tags": [
                "language"
              ],
              "color": "#380A4D"
            },
            "request": {
              "name": "elixir",
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
