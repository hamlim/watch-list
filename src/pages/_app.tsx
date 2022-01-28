import Head from 'next/head'
import { useEffect } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import { Provider as UserProvider } from '../lib/userContext'
import '../reset.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    let doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Watch List</title>
      </Head>
      <ErrorBoundary>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ErrorBoundary>
    </>
  )
}
