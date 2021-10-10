import React from 'react'
import Link from 'next/link'
import styles from './Breadcrumb.module.css'

const Breadcrumb = ({ page }) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        Home
      </Link>{' '}
      <span className={styles.dash}>/</span>{' '}
      <span className={styles.span}>{page}</span>
    </div>
  )
}

export default Breadcrumb
