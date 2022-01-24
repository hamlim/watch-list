import Head from 'next/head'
import './reset.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Watch List</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
