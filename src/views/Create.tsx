import { useEffect, useState } from 'react'
import { Box, Input, Redirect, Button, Link } from '../components'
import { useUser } from '../lib/userContext'
import { Header, Home } from '../components/Page'
import { supabase } from '../lib/supabaseClient'
import useErrorBoundary from '../lib/useErrorBoundary'

export default function Create() {
  let [user] = useUser()
  let [listName, setListName] = useState('')
  let trigger = useErrorBoundary()
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState(null)

  if (!user) {
    return <Redirect to="/login" />
  }

  useEffect(() => {
    if (success !== null) {
      setTimeout(() => {
        setSuccess(null)
      }, 2000)
    }
  }, [success])

  async function createList() {
    try {
      setLoading(true)
      let { data, error } = await supabase.from('[watch-list] Lists').insert([
        {
          title: listName,
          creator: user.id,
          list: [],
          collaborators: [],
        },
      ])
      if (error) {
        throw error
      }
      console.log(data)
      setLoading(false)
      setSuccess(true)
      setListName('')
    } catch (err) {
      trigger(err)
    }
  }

  return (
    <Box>
      <Header>
        <Link href="/app">
          <Home>Watch List</Home>
        </Link>
      </Header>
      <Box m="4">
        <Box is="h3">Create new list:</Box>
        {success ? <Box>Successfully created your new list!</Box> : null}
        <Box display="flex" alignItems="flex-end" my="4">
          <Input flexGrow="1" value={listName} onChange={setListName}>
            List Name:
          </Input>
          <Button
            disabled={loading}
            ml="4"
            variant="primary"
            onClick={createList}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
