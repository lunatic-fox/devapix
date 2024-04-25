import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'
import responseStyle from '@/app/docs/components/ReqResExample/index.module.css'
import {
  DeviconJavascript,
  DeviconTypescript,
  DeviconPython,
  DeviconVscode
} from '@devapix/react'

export default function Page() {
  return (
    <Docs title='Ways of use: @devapix/react'>
      <p>
        To use <Code ic='Devicon' /> React elements you just need to install <Code ic='@devapix/react' /> npm package.
      </p>
      <Code c='npm i @devapix/react' />
      <p>
        After installation, the next step is to import the modules you want to your <Code ic='.jsx' /> or <Code ic='.tsx' /> file, like in the example below.
      </p>
      <h4>Example</h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
        import { DeviconJavascript } from '@devapix/react'

        export default function Page() {
          return (
            <section>
              <h2>JavaScript logo</h2>
              <DeviconJavascript/>
            </section>
          )
        }
      `} />
      <p>This example is equivalent to the request below.</p>
      <ReqResExample
        title={false}
        reqs={['javascript']} />
      <br />

      <h3>Element name</h3>
      <p>
        All React element names follow this pattern: <Code ic={'<Devicon[Icon name]/>'} />, see the examples below.
      </p>
      <Code
        h='ts'
        c={`
          python:     <DeviconPython/>
          javascript: <DeviconJavascript/>
          typescript: <DeviconTypescript/>
          java:       <DeviconJava/>
          ruby:       <DeviconRuby/>
        `} />

      <h3>Release</h3>
      <p>
        To select a specific release you just have to specify the release number when importing.
      </p>
      <Code
        h='ts'
        c={`
          import { DeviconPhotoshop } from '@devapix/react'

          export default function Page() {
            return (
              <section>
                <DeviconPhotoshop/>
              </section>
            )
          }
        `} />
      <p>
        This is equivalent to the latest release of <Code ic='photoshop' /> icon.
      </p>
      <ReqResExample
        title={false}
        reqs={['photoshop']} />
      <p>
        While this example below.
      </p>
      <Code
        h='ts'
        c={`
          import { DeviconPhotoshop } from '@devapix/react/2.15.1'
          
          export default function Page() {
            return (
              <section>
                <DeviconPhotoshop/>
              </section>
            )
          }
        `} />
      <p>
        Is equivalent to <Code ic='photoshop' /> icon of <Code ic='2.15.1' /> release.
      </p>
      <ReqResExample
        title={false}
        reqs={['photoshop&r=2.15.1']} />
      <p style={{ textAlign: 'center', color: '#ffd900' }}>
        ⚠️ Notice that this library only works with released icons, that is, it will not work with icons that are still under <Code ic='develop' /> branch of <Code ic='Devicon' /> project.
      </p>
      <h3>Other properties</h3>
      <p>
        The other properties are optional attributes and the same as API request, take a look at the list below.
      </p>
      <Code
        h='ts'
        c={`
        version:
            'o'  | 'original'
          | 'p'  | 'plain'
          | 'l'  | 'line'
          | 'ow' | 'original-wordmark'
          | 'pw' | 'plain-wordmark'
          | 'lw' | 'line-wordmark'
        color: string
        theme: 'd' | 'dark' | 'l' | 'light'
        size: number // default: 128
      `} />
      <p>
        Here we have more examples using the rest of properties.
      </p>
      <h4>Icons</h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
        import {
          DeviconJavascript,
          DeviconTypescript,
          DeviconPython,
          DeviconVscode
        } from '@devapix/react'

        export default function Page() {
          return (
            <section>
              <DeviconJavascript theme='light' size={80}/>
              <DeviconTypescript theme='dark'/>
              <DeviconPython color='#008004'/>
              <DeviconVscode version='ow' color='#ff5300' size={80}/>
            </section>
          )
        }
        `} />

      <h5>Requests</h5>
      <Code c={`
        https://devapix.vercel.app/api?javascript&t=l&s=80
        https://devapix.vercel.app/api?typescript&t=d
        https://devapix.vercel.app/api?python&c=008004
        https://devapix.vercel.app/api?vscode&v=ow&c=ff5300&s=80
      `}/>

      <h5>Response</h5>
      <section className={responseStyle.reqResImgWrapper} style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <DeviconJavascript theme='light' size={80}/>
        <DeviconTypescript theme='dark'/>
        <DeviconPython color='#008004'/>
        <DeviconVscode version='ow' color='#ff5300' size={80}/>
      </section>
      <hr />

      <h4>Twitter@2.8 icon</h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
        import Devicon from '@devapix/react/2.8'

        export default function Page() {
          return (
            <section>
              <DeviconTwitter
                version={'p'}
                color='#c7bd2b'
                size={80}/>
            </section>
          )
        }
      `} />
      <ReqResExample
        title={false}
        reqs={['twitter&r=2.8&v=p&c=c7bd2b&s=80']} />
      <hr />

      <h4>Twitter@latest icon</h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
        import Devicon from '@devapix/react'

        export default function Page() {
          return (
            <section>
              <DeviconTwitter
                version={'p'}
                color='#c7bd2b'
                size={80}/>
            </section>
          )
        }
      `} />
      <ReqResExample
        title={false}
        reqs={['twitter&v=p&c=c7bd2b&s=80']} />
      <hr />



    </Docs>
  )
}
