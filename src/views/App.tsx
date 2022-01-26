import { Suspense } from 'react'
import { Box, Link, Redirect } from '../components'
import { useUser } from '../lib/userContext'
import { Header, Home } from '../components/Page'
import { useCache } from '../lib/useCache.client'
import { supabase } from '../lib/supabaseClient'
import * as styles from './App.css'

let listsCache = new Map()

function Lists({ userId }) {
  let [lists] = useCache(listsCache, userId, async () => {
    return (
      await supabase
        .from('[watch-list] Lists')
        .select('*')
        .eq('creator', userId)
    ).data
  })

  return lists.map((list, idx: number) => (
    <Box
      is="ul"
      className={styles.list}
      key={list.id}
      mt={idx !== 0 ? '4' : null}
    >
      <Box is="h4">{list.title}</Box>
      {list.list.slice(0, 2).map((entry) => (
        <Box is="li" key={entry.title}>
          {entry.title}
        </Box>
      ))}
      <Link href={`/list/${list.id}`}>View List</Link>
    </Box>
  ))
}

export default function App() {
  let [user] = useUser()

  if (!user) {
    return <Redirect to="/login" />
  }

  return (
    <Box>
      <Header>
        <Home>Watch List</Home>
      </Header>
      <Box m="4">
        <Box is="h3">My Lists:</Box>
        <Suspense fallback="Loading...">
          <Lists userId={user.id} />
        </Suspense>
        <Link href="/create">Create a new list</Link>
      </Box>
    </Box>
  )
}
