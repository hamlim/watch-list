import { useState, Suspense } from 'react'
import { Box, Button, Input, Redirect, Link } from '../components'
import { supabase } from '../lib/supabaseClient'
import { useCache } from '../lib/useCache.client'
import useErrorBoundary from '../lib/useErrorBoundary'
import { useUser } from '../lib/userContext'
import * as styles from './List.css'

function Entry({ entry, canEdit, onRemove }) {
  let [loading, setLoading] = useState(false)

  async function removeEntry() {
    setLoading(true)
    await onRemove()
    setLoading(false)
  }

  return (
    <Box is="li" key={entry.title}>
      {entry.title}{' '}
      {canEdit ? (
        <Button disabled={loading} variant="text" onClick={removeEntry}>
          Remove
        </Button>
      ) : null}
    </Box>
  )
}

let listCache = new Map()

function ListContents({ id }) {
  let [addition, setAddition] = useState('')
  let trigger = useErrorBoundary()
  let [loading, setLoading] = useState(false)
  let [user] = useUser()

  if (!user) {
    return <Redirect to="/login" />
  }

  let [list, updateCache] = useCache(listCache, id, async () => {
    return (await supabase.from('[watch-list] Lists').select('*').eq('id', id))
      .data[0]
  })

  async function addToList() {
    try {
      setLoading(true)
      let { error, data } = await supabase
        .from('[watch-list] Lists')
        .update({
          list: [
            ...list.list,
            {
              title: addition,
            },
          ],
        })
        .eq('id', id)
      if (error) {
        throw error
      }
      updateCache(id, data[0])
      setLoading(false)
      setAddition('')
    } catch (error) {
      setLoading(false)
      trigger(error)
    }
  }

  // If the list is owned by the current user, or they are a collaborator
  // Allow them to add entries!
  let canEdit = list.creator === user.id || list.collaborators.includes(user.id)

  function handleRemove(entry) {
    return async function () {
      try {
        let { error, data } = await supabase
          .from('[watch-list] Lists')
          .update({
            list: list.list.filter((e) => e.title !== entry.title),
          })
          .eq('id', id)
        if (error) {
          throw error
        }
        updateCache(id, data[0])
      } catch (error) {
        trigger(error)
      }
    }
  }

  return (
    <>
      <Box p="4" is="header" position="relative">
        <Link href="/app">Back</Link>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          is="h4"
          fontSize="2"
        >
          {list.title}
        </Box>
      </Box>
      <Box is="ul" className={styles.list} mt="4">
        {list.list.map((entry) => (
          <Entry
            onRemove={handleRemove(entry)}
            entry={entry}
            canEdit={canEdit}
            key={entry.title}
          />
        ))}
      </Box>
      {canEdit ? (
        <Box display="flex" alignItems="flex-end" mt="4">
          <Input flexGrow="1" value={addition} onChange={setAddition}>
            Add a movie or show:
          </Input>
          <Button
            disabled={loading}
            ml="2"
            variant="primary"
            onClick={addToList}
          >
            Add
          </Button>
        </Box>
      ) : null}
    </>
  )
}

export default function List({ listId }) {
  return (
    <Box
      maxWidth={{ _: '95vw', '60': 'content' }}
      mt="4"
      mx="auto"
      minHeight="100vh"
    >
      <Suspense fallback="Loading...">
        <ListContents id={listId} />
      </Suspense>
    </Box>
  )
}
