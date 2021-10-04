import React, { useState } from 'react'
import styles from './BookList.module.css'
import Link from 'next/link'

const BookList = ({ data }) => {
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
            {data.data.map((e) => (
              <li className={styles.bookList} key={e._id}>
                <Link
                  href={`/book-list/${e._id}`}
                >{`${e.title} by ${e.authors}`}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default BookList
