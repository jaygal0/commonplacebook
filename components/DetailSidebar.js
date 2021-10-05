import React from 'react'
import { useRouter } from 'next/router'
import styles from './DetailSidebar.module.css'

const DetailSidebar = ({ data }) => {
  const { _id, title, authors, author, highlights } = data.data
  const router = useRouter()
  return (
    <div className={styles.sidebar}>
      <button className={styles.button} onClick={router.back}>
        back
      </button>
      <div>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>title</h2>
          <p className={styles.text}>{title}</p>
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>author</h2>
          <p className={styles.text}>{authors}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailSidebar
