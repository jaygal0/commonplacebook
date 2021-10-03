import React from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import BookList from '../components/BookList'

export default function bookList({ data }) {
  return (
    <>
      <Meta />
      <Header />
      <BookList data={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/books`)
  const data = await res.json()

  if (!data) {
    return {
      notfound: true,
    }
  }

  return {
    props: { data },
  }
}
