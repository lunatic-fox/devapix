import styles from './index.module.css'

export default function Table({ header, rows }: {
  header: string[]
  rows: string[][]
}) {
  return (
    <section className={styles.tableWrapper}>
      <section className={styles.table}>
        <div className={styles.tr}>{
          header.map(e => <div className={styles.th}>{e}</div>)
        }</div>
        {rows.map(e => <div className={styles.tr}>{e.map(f =>
          f.match(/^\^.*?|^$/) ? <div className={styles.tdNone}>{f.slice(1)}</div>
            : <div className={styles.td}>{f}</div>)}</div>
        )}
      </section>
    </section>
  )
}
