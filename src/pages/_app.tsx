import Head from 'next/head'
import ErrorBoundary from '../components/ErrorBoundary'
import { Provider as UserProvider } from '../lib/userContext'
import '../reset.css'

export default function App({ Component, pageProps }) {
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
