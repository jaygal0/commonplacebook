import React, { useState } from 'react'
import styles from './BookList.module.css'
import Link from 'next/link'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

const BookList = ({ data }) => {
  return (
    <>
      <main className={styles.main}>
        <Breadcrumb page="book list" />
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
      <Footer />
    </>
  )
}

export default BookList
