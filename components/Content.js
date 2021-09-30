import React, { useState, useEffect } from 'react'
import data from '../data/index'
import styles from '../styles/Home.module.css'

const Content = () => {
  const [book, setBook] = useState(0)
  const [passage, setPassage] = useState(0)
  const [activeAnimation, setActiveAnimation] = useState(true)

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    setActiveAnimation(!activeAnimation)

    setTimeout(() => {
      let book = Math.floor(Math.random() * data.length)
      let passage = Math.floor(Math.random() * data[book].highlights.length)
      setBook(book)
      setPassage(passage)
    }, 1300)
  }
  return (
    <>
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

export default Content
