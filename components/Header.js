import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

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
      <div className={styles.burger} onClick={showSidebar}>
        <Image
          className={styles.burger}
          src="/burger.svg"
          width={24}
          height={24}
        />
      </div>

      <div
        className={
          sidebar ? `${styles.mobileMenuShow}` : `${styles.mobileMenuHide}`
        }
      >
        <div className={styles.logo} onClick={showSidebar}>
          <Link href="/">Commonplace Book</Link>
        </div>

        <div className={styles.booklist} onClick={showSidebar}>
          <Link href="/book-list">book list</Link>
        </div>
        <footer className={styles.footer}>
          <a
            href="https://galina.to"
            target="_blank"
            rel="noreferrer"
            className={styles.footerLinks}
          >
            built by joshua galinato
          </a>
        </footer>
      </div>
    </header>
  )
}

export default Header
