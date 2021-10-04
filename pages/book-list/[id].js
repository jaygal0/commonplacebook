import React from 'react'
import BookDetail from '../../components/BookDetail'
import Header from '../../components/Header'
import Meta from '../../components/Meta'

const index = ({ data }) => {
  return (
    <>
      <Meta />
      <Header />
      <BookDetail data={data} />
    </>
  )
}

export default index

export async function getServerSideProps({ query: { id } }) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/books/${id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
