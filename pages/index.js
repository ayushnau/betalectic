import React from 'react'
import Head from 'next/head';

const home = () => {
  return (
    <>
      <Head>
        <title>Home App</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />

      </Head>

    <div><a href="/teams">teams</a></div>
    </>
  )
}

export default home