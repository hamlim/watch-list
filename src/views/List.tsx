import { useState, Suspense } from 'react'
import { Box, Button, Input, Redirect, Link } from '../components'
import { supabase } from '../lib/supabaseClient'
import { useCache } from '../lib/useCache.client'
import useErrorBoundary from '../lib/useErrorBoundary'
import { useUser } from '../lib/userContext'
import { search, movieCache } from '../lib/movieAPI'
import * as styles from './List.css'

function FallbackEntry({ entry }) {
  return <Box is="li">{entry.title}</Box>
}

function Entry({ entry, canEdit, onRemove }) {
  let [movie] = useCache(movieCache, entry.id, async () => {
    let res = await search(entry.title)
    // default to the first result
    return res.results[0]
  })

  let [loading, setLoading] = useState(false)

  async function removeEntry() {
    setLoading(true)
    await onRemove()
    setLoading(false)
  }

  return (
    <Box is="li" mb="4" borderRadius="medium" overflow="hidden">
      <Box position="relative">
        <Box
          is="img"
          width="100%"
          height="auto"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Box className={styles.banner}>
          <Box is="h4">{entry.title}</Box>
          {canEdit ? (
            <Button disabled={loading} variant="text" onClick={removeEntry}>
              Remove
            </Button>
          ) : null}
        </Box>
      </Box>
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
              id: list.list.length,
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
            list: list.list.filter((e) => e.id !== entry.id),
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
      <Box
        p="4"
        is="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/app">Back</Link>
        <Box is="h4" fontSize="2">
          {list.title}
        </Box>
        <Link href={`/edit/${list.id}`}>Edit</Link>
      </Box>
      <Box is="ul" className={styles.list} mt="4">
        {list.list.map((entry) => (
          <Suspense
            key={entry.title}
            fallback={<FallbackEntry entry={entry} />}
          >
            <Entry
              onRemove={handleRemove(entry)}
              entry={entry}
              canEdit={canEdit}
            />
          </Suspense>
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
      maxWidth={{ _: '95vw', large: 'content' }}
      mt="4"
      mx="auto"
      mb="10"
      minHeight="100vh"
    >
      <Suspense fallback="Loading...">
        <ListContents id={listId} />
      </Suspense>
    </Box>
  )
}
