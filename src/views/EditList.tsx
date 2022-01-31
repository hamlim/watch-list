import { Suspense, useEffect, useState } from 'react'
import { Box, Input, Redirect, Button, Link } from '../components'
import { useUser } from '../lib/userContext'
import { Header, Home } from '../components/Page'
import { supabase } from '../lib/supabaseClient'
import useErrorBoundary from '../lib/useErrorBoundary'
import { useCache } from '../lib/useCache.client'

let listCache = new Map()

function EditListForm({ listId, user }) {
  let [list, updateCache] = useCache(listCache, listId, async () => {
    return (
      await supabase.from('[watch-list] Lists').select('*').eq('id', listId)
    ).data[0]
  })

  if (user.id !== list.creator) {
    return <Redirect to={`/list/${listId}`} />
  }

  let [listName, setListName] = useState(list.title)
  let trigger = useErrorBoundary()
  let [loading, setLoading] = useState(false)

  async function updateListName() {
    try {
      setLoading(true)
      let {
        data: [listResult],
        error,
      } = await supabase
        .from('[watch-list] Lists')
        .update({
          ...list,
          title: listName,
        })
        .eq('id', listId)
      if (error) {
        throw error
      }
      updateCache(listId, listResult)
      setLoading(false)
    } catch (err) {
      trigger(err)
    }
  }

  return (
    <Box display="flex" alignItems="flex-end">
      <Input flexGrow="1" value={listName} onChange={setListName}>
        List Name:
      </Input>
      <Button
        disabled={loading}
        ml="4"
        variant="primary"
        onClick={updateListName}
      >
        Update
      </Button>
    </Box>
  )
}

export default function EditList({ listId }) {
  let [user] = useUser()

  if (!user) {
    return <Redirect to="/login" />
  }

  return (
    <Box m="4">
      <Box mb="4">
        <Link href={`/list/${listId}`}>Back</Link>
      </Box>
      <Suspense fallback="Loading...">
        <EditListForm listId={listId} user={user} />
      </Suspense>
    </Box>
  )
}
