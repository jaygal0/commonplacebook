import React from 'react'
import BreadcrumbDetail from './BreadcrumbDetail'
import styles from './Content.module.css'
import DetailSidebar from './DetailSidebar'
import Footer from './Footer'
import { v4 as uuidv4 } from 'uuid'

const BookDetail = ({ data }) => {
  const { _id, title, authors, author, highlights } = data.data

  return (
    <>
      <BreadcrumbDetail page="book list" detail={title} />
      <main className={styles.main}>
        <div className={styles.headingContainer}>
          <h1 className={styles.h1}>
            {highlights.map((e) => (
              <p key={uuidv4()}>{e.text}</p>
            ))}
          </h1>
        </div>
      </main>
      <DetailSidebar data={data} />
      <Footer />
    </>
  )
}

export default BookDetail
