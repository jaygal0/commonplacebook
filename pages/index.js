import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Meta from '../components/Meta'

// TODO: Responsive design
// TODO: Figure out focus states as well as command
// TODO: Figure out color scheme
// TODO: Favicon
// TODO: Website URL
// TODO: Figure out sorting on booklist
// TODO: Implement authentication

export default function Home({ data }) {
  return (
    <>
      <Meta />
      <Header />
      <Content data={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/books/`)
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
