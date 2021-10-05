import React from 'react'
import styles from './Content.module.css'
import DetailSidebar from './DetailSidebar'
import Footer from './Footer'

const BookDetail = ({ data }) => {
  const { _id, title, authors, author, highlights } = data.data

  return (
    <>
      <main className={styles.main}>
        <div className={styles.headingContainer}>
          <h1 className={styles.h1}>
            {highlights.map((e) => (
              <p key={e.location.value}>{e.text}</p>
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
