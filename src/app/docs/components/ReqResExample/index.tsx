import Image from 'next/image'
import Code from '../../../components/Code'
import styles from './index.module.css'

const API_URL = 'https://devapix.vercel.app/api'
export default function ReqResExample({ reqs, title, info }: {
  reqs: string[]
  title?: string | boolean
  info?: boolean
}) {
  let examples = reqs.map(async (req, i) => {
    const icon = { name: '', size: 128 }
    const requestProps = req.split('&').map(e => e.split('='))

    requestProps.forEach(e => {
      if (e.length === 1) icon.name = e[0]
      if (e[0].match(/s(ize)?/) && !isNaN(+e[1])) icon.size = +e[1]
    })

    if (info) {
      const iconInfo = await (await fetch(`${API_URL}/info?${req}`)).json()
      return (
        <section key={i}>
          {i > 0 ? <br /> : ''}
          {i > 0 ? <div className={styles.line}></div> : ''}
          <section className={styles.reqResWrapper}>
            <h5>Request</h5>
            <Code c={`${API_URL}/info?${req}`} />
            <h5>Response</h5>
            <Code c={JSON.stringify(iconInfo, null, 2)} sf={true} h='json' />
          </section>
        </section>
      )
    }

    return (
      <section key={i}>
        {i > 0 ? <br /> : ''}
        {i > 0 ? <div className={styles.line}></div> : ''}
        <section className={styles.reqResWrapper}>
          <h5>Request</h5>
          <Code c={`${API_URL}?${req}`} />
          <h5>Response</h5>
          <section className={styles.reqResImgWrapper}>
            <Image
              src={`${API_URL}?${req}`}
              width={icon.size}
              height={icon.size}
              alt={icon.name}
              priority={true} />
          </section>
        </section>
      </section>
    )
  })

  return (
    <section>
      {
        title === false ? ''
          : <>
            <br />
            <h4>{title ? title : `Example${examples.length > 1 ? 's' : ''}`}</h4>
          </>
      }
      {examples}
    </section>
  )
}
