import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Commonplace Book</Link>
      </div>
      <div
        className={`${styles.pageLinks} ${
          router.pathname == '/book-list' ? styles.active : ''
        }`}
      >
        <Link href="/book-list">Book List</Link>
      </div>
    </header>
  )
}

export default Header
