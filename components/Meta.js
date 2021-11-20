import React from 'react'
import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <title>Commonplace Book</title>
      <meta
        name="description"
        content="One place to gather all my book notes. Built by Joshua Galinato"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Libre+Baskerville&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.svg" />
    </Head>
  )
}

export default Meta
