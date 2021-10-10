import React from 'react'
import Link from 'next/link'
import styles from './BreadcrumbDetail.module.css'

const Breadcrumb = ({ page, detail }) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        Home
      </Link>{' '}
      <span className={styles.dash}>/</span>{' '}
      <span className={styles.span}>
        <Link href="/book-list">{page}</Link>
      </span>
      <span className={styles.dash}>/</span>{' '}
      <span className={styles.detail}>{detail}</span>
    </div>
  )
}

export default Breadcrumb
