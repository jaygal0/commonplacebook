import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>commonplace book</div>
      <div className={styles.link}>about</div>
    </header>
  )
}

export default Header
