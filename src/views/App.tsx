import { Suspense, useEffect, useState } from 'react'
import Box from '../components/Box'
import { useUser } from '../lib/userContext'
import Link from '../components/Link'
import { Container, Header, Home } from '../components/Page'
import Button from '../components/Button'
import Input from '../components/Input'
import { useCache } from '../lib/useCache.client'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

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

  return <Box is="pre">{JSON.stringify(lists)}</Box>
}

function Redirect() {
  let router = useRouter()
  useEffect(() => {
    router.push('/login')
  }, [])
  return null
}

export default function App() {
  let [user] = useUser()
  let [addition, setAddition] = useState('')

  function addToList() {
    // todo
  }

  if (!user) {
    return <Redirect />
  }

  return (
    <Box>
      <Header>
        <Link href="/app">
          <Home>Watch List</Home>
        </Link>
      </Header>
      <Box m="4">
        <Box is="h3">My Lists:</Box>
        <Suspense fallback="Loading...">
          <Lists userId={user.id} />
        </Suspense>
      </Box>
      <Box display="flex" alignItems="flex-end" mx="2">
        <Input flexGrow="1" value={addition} onChange={setAddition}>
          Add a movie or show:
        </Input>
        <Button ml="2" variant="primary" onClick={addToList}>
          Add
        </Button>
      </Box>
    </Box>
  )
}
