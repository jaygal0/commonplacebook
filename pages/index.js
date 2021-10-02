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
  const res = await fetch(`http://localhost:3000/api/`)
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
