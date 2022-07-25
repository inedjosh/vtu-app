import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="description" content="vtu-app-home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className=''>Hello world</h1>
      </div>
    </div>
  )
}

export default Home
