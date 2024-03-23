import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs refs={{
      previousDoc: {
        link: 'ways-of-use/img',
        label: 'Ways of use: <img>'
      },
      currentDoc: 'ways-of-use/nextjs-image',
      nextDoc: {
        link: 'ways-of-use/deviconjs',
        label: 'Ways of use: devicon.js'
      }
    }}>
      <h2>{`Next.js <Image>`}</h2>
      <p>
        <Code ic='<Image>' /> is a particular element of Next.js framework that is very similar with the regular HTML <Code ic='<img>' /> element. However, it needs some configurations before work properly.
      </p>
      <p>
        Since all icons are <Code ic='.svg' /> files that comes from <Code ic='https://devapix.vercel.app/' />, we need to pass that information to <Code ic='next.config' /> file, which can have <Code ic='.js' /> or <Code ic='.mjs' /> as extension.
      </p>
      <h5>next.config.mjs</h5>
      <Code
        h='js'
        c={`
          /** @type {import('next').NextConfig} */
          const nextConfig = {
            images: {
              dangerouslyAllowSVG: true,
              remotePatterns: [
                {
                  protocol: 'https',
                  hostname: 'devapix.vercel.app',
                  port: ''
                }
              ]
            }
          }
          
          export default nextConfig
      `} />
      <p>
        After that it will be possible to use <Code ic='<Image>' /> element to display the requested icon.
      </p>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
          import Image from 'next/image'

          export default function Page() {
            return (
              <div>
                <h2>Next.js Logo</h2>
                <Image
                  src='https://devapix.vercel.app/api?nextjs'
                  width={128}
                  height={128}
                  alt='Next.js logo'/>
              </div>
            )
          }
      `} />
      <p>
        The only property of API request that will have no effect by using <Code ic='<Image>' /> element is <Code ic='size' /> because <Code ic='width' /> and <Code ic='height' /> are required attributes of the element.
      </p>
      <p>
        The workaround to this issue is to define the <Code ic='width' /> or <Code ic='height' /> in theses properties or by using <Code ic='style' /> or <Code ic='className' /> attributes.
      </p>
      <h4>Example using <Code ic='width' /> and <Code ic='height' /></h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
          import Image from 'next/image'

          export default function Page() {
            return (
              <div>
                <h2>Next.js Logo</h2>
                <Image
                  src='https://devapix.vercel.app/api?nextjs'
                  width={64}
                  height={64}
                  alt='Next.js logo'/>
              </div>
            )
          }
      `} />
      <br />
      <h4>Example using <Code ic='style' /></h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
          import Image from 'next/image'

          export default function Page() {
            return (
              <div>
                <h2>Next.js Logo</h2>
                <Image
                  src='https://devapix.vercel.app/api?nextjs'
                  width={128}
                  height={128}
                  style={{ width: 64 }}
                  alt='Next.js logo'/>
              </div>
            )
          }
      `} />
      <br />
      <h4>Example using <Code ic='className' /></h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
          import Image from 'next/image'
          import styles from './index.module.css'

          export default function Page() {
            return (
              <div>
                <h2>Next.js Logo</h2>
                <Image
                  src='https://devapix.vercel.app/api?nextjs'
                  width={128}
                  height={128}
                  className={styles.icon}
                  alt='Next.js logo'/>
              </div>
            )
          }
      `} />
      <h5>index.module.css</h5>
      <Code
        h='css'
        c={`
          .icon {
            width: 64px;
          }
      `} />
      <p>
        Both examples are equivalent to the API request below.
      </p>
      <ReqResExample
        title={false}
        reqs={['nextjs&s=64']} />
    </Docs>
  )
}
