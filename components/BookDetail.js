import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Content.module.css'
import Footer from './Footer'

const BookDetail = ({ data }) => {
  const router = useRouter()
  const { _id, title, authors, author, highlights } = data.data

  return (
    <>
      {/* MAIN */}
      <main className={styles.main}>
        <div className={styles.headingContainer}>
          <h1 className={styles.h1}>
            {highlights.map((e) => (
              <p key={e.location.value}>{e.text}</p>
            ))}
          </h1>
        </div>
      </main>

      {/* SIDEBAR */}
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
          <div className={styles.wrapper}>
            <h2 className={styles.h2}>Location</h2>
            <p className={styles.text}></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BookDetail
