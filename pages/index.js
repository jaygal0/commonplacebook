import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../data/index'

export default function Home() {
  const [book, setBook] = useState(0)
  const [passage, setPassage] = useState(0)

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    let book = Math.floor(Math.random() * data.length)
    let passage = Math.floor(Math.random() * data[book].highlights.length)

    setBook(book)
    setPassage(passage)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mantra</title>
        <meta name="description" content="mantra" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>commonplace book</div>
        <div className={styles.link}>about</div>
      </header>

      <main className={styles.main}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.h1}>{data[book].highlights[passage].text}</h1>
        </div>
        <div className={styles.sidebar}>
          <button className={styles.button} onClick={getQuote}>
            New Note
          </button>
          <div>
            <div className={styles.wrapper}>
              <h2 className={styles.h2}>title</h2>
              <p className={styles.text}>{data[book].title}</p>
            </div>
            <div className={styles.wrapper}>
              <h2 className={styles.h2}>author</h2>
              <p className={styles.text}>{data[book].authors}</p>
            </div>
            <div className={styles.wrapper}>
              <h2 className={styles.h2}>Location</h2>
              <p className={styles.text}>
                {data[book].highlights[passage].location.value}
              </p>
            </div>
          </div>
          <div className={styles.footer}>
            <div>built by joshua galinato</div>
          </div>
        </div>
      </main>
    </div>
  )
}
