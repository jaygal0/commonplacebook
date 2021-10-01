import React, { useState } from 'react'
import data from '../data'
import styles from './BookList.module.css'

const BookList = () => {
  return (
    <>
      {/* MAIN */}
      <main className={styles.main}>
        <p className={styles.paragraph}>
          Every highlight displayed is taken from one of the books listed below.
          This is an ever-growing list that I hope to expand for the rest of my
          life.
        </p>
        <div className={styles.headingContainer}>
          <ul>
            {data.map((e) => (
              <li className={styles.bookList} key={e.asin}>
                {console.log(e)}
                {e.title}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default BookList
