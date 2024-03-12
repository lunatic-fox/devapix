import Image from 'next/image'
import Code from '../Code'
import styles from './index.module.css'

const API_URL = 'https://devapix.vercel.app/api'
export default function ReqResExample({ reqs }: {
  reqs: string[] | { request: string, code: string }[]
}) {
  let examples = reqs.map((req, i) => {
    const icon = { name: '', size: 128 }

    if (typeof req === 'string') {
      const requestProps = req
        .split(',')
        .map(e => e.split(':'))

      requestProps.forEach(e => {
        if (e.length === 1) icon.name = e[0]
        if (e[0] === 's' && !isNaN(+e[1])) icon.size = +e[1]
      })

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
    } else {
      return (
        <section key={i}>
          {i > 0 ? <br /> : ''}
          {i > 0 ? <div className={styles.line}></div> : ''}
          <section className={styles.reqResWrapper}>
            <h5>Request</h5>
            <Code c={`${API_URL}/${req.request}`} />
            <h5>Response</h5>
            <Code h='json' c={req.code} />
          </section>
        </section>
      )
    }
  })

  return (
    <section>
      <br />
      <h4>Example{examples.length > 1 ? 's' : ''}</h4>
      {examples}
    </section>
  )
}
