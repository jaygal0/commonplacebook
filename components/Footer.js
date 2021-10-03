import React from 'react'
import styles from './Footer.module.css'
import styleLink from './Content.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://galina.to"
        target="_blank"
        rel="noreferrer"
        className={styleLink.pageLinks}
      >
        built by joshua galinato
      </a>
    </footer>
  )
}

export default Footer
