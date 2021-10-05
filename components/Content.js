import React, { useState } from 'react'
import styles from './Content.module.css'
import Footer from './Footer'

const Content = ({ data }) => {
  const [book, setBook] = useState(Math.floor(Math.random() * data.data.length))
  const [passage, setPassage] = useState(
    Math.floor(Math.random() * data.data[book].highlights.length)
  )
  const getQuote = () => {
    let book = Math.floor(Math.random() * data.data.length)
    let passage = Math.floor(Math.random() * data.data[book].highlights.length)
    setBook(book)
    setPassage(passage)
  }

  return (
    <>
      {/* MAIN */}
      <main className={styles.main}>
        <div className={styles.headingContainer}>
          <h1 className={styles.h1}>
            {data.data[book].highlights[passage].text}
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
            <p className={styles.text}>{data.data[book].title}</p>
          </div>
          <div className={styles.wrapper}>
            <h2 className={styles.h2}>author</h2>
            <p className={styles.text}>{data.data[book].authors}</p>
          </div>
          <div className={styles.wrapper}>
            <h2 className={styles.h2}>Location</h2>
            <p className={styles.text}>
              {data.data[book].highlights[passage].location.value}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Content
