import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Meta from '../components/Meta'

// TODO: Clean up API folder path
// TODO: Figure out how book detail pages [:id]
// TODO: Figure out sorting on booklist
// TODO: Add useRouter highlight for 'Book List'
// TODO: Clean up components (Sidebar etc...)
// TODO: Responsive design
// TODO: Favicon
// TODO: Website URL

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
