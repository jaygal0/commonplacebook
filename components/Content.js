import React, { useState } from 'react'
import data from '../data'
import styles from './Content.module.css'

const Content = () => {
  const [book, setBook] = useState(Math.floor(Math.random() * data.length))
  const [passage, setPassage] = useState(
    Math.floor(Math.random() * data[book].highlights.length)
  )
  const [activeAnimation, setActiveAnimation] = useState(true)

  const getQuote = () => {
    setActiveAnimation(!activeAnimation)

    // FIXME: Figure this one out
    // setTimeout(() => {
    let book = Math.floor(Math.random() * data.length)
    let passage = Math.floor(Math.random() * data[book].highlights.length)
    setBook(book)
    setPassage(passage)
    // }, 1300)
  }

  return (
    <>
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
        </div>
      </main>

      {/* SIDEBAR */}
      <div className={styles.sidebar}>
        <button className={styles.button} onClick={getQuote}>
          new highlight
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
        <footer className={styles.footer}>
          <a
            href="https://galina.to"
            target="_blank"
            className={styles.pageLinks}
          >
            built by joshua galinato
          </a>
        </footer>
      </div>
    </>
  )
}

export default Content
