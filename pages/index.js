import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Meta from '../components/Meta'

// TODO: Figure out database logic

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

  const res = await fetch(`${site}/api/`)
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
