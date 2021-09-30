import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../data/index'

export default function Home() {
  const [book, setBook] = useState(0)
  const [passage, setPassage] = useState(0)
  const [activeAnimation, setActiveAnimation] = useState(true)

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    let book = Math.floor(Math.random() * data.length)
    let passage = Math.floor(Math.random() * data[book].highlights.length)

    setActiveAnimation(!activeAnimation)

    setTimeout(() => {
      setBook(book)
      setPassage(passage)
    }, 1300)
  }

  return (
    <>
      <Head>
        <title>Mantra</title>
        <meta name="description" content="mantra" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>commonplace book</div>
        <div className={styles.link}>about</div>
      </header>

      {/* MAIN */}
      <main className={styles.main}>
        <div
          className={`${styles.headingContainer} ${
            activeAnimation ? styles.animationSwipe : styles.animationWipe
          }`}
        >
          <h1
            className={`${styles.h1} ${
              activeAnimation
                ? styles.animationDissolve
                : styles.animationDissolveAgain
            }`}
          >
            {data[book].highlights[passage].text}
          </h1>
          {/* <div */}
          {/* className={`${styles.mainBackground} ${ */}
          {/* activeAnimation ? styles.animationWipe : styles.animationSwipe */}
          {/* }`} */}
          {/* ></div> */}
        </div>
      </main>

      {/* SIDEBAR */}
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
        <footer className={styles.footer}>built by joshua galinato</footer>
      </div>
    </>
  )
}
