import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Commonplace Book</Link>
      </div>
      <div className={styles.pageLinks}>
        <Link href="/book-list">Book List</Link>
      </div>
    </header>
  )
}

export default Header
