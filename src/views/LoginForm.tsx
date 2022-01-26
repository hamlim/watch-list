import { useState } from 'react'
import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabaseClient'
import useErrorBoundary from '../lib/useErrorBoundary'
import { useUser } from '../lib/userContext'
import { useRouter } from 'next/router'

export default function LoginForm() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [loading, setLoading] = useState(false)
  let trigger = useErrorBoundary()
  let [, setUser] = useUser()
  let router = useRouter()

  async function handleSubmit() {
    try {
      setLoading(true)
      const { error, user } = await supabase.auth.signIn({ email, password })
      if (error) {
        throw error
      }
      setUser(user)
      setLoading(false)
      router.push('/app')
    } catch (error) {
      trigger(error)
    }
  }

  return (
    <Box
      is="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="content"
      mt="10"
      p="4"
    >
      <Input
        width="100%"
        value={email}
        onChange={setEmail}
        inputProps={{ autoComplete: 'email' }}
      >
        Email:
      </Input>
      <Input
        width="100%"
        value={password}
        onChange={setPassword}
        inputProps={{ type: 'password', autoComplete: 'new-password' }}
        mt="4"
      >
        Password:
      </Input>
      <Button
        mt="4"
        width="100%"
        variant="primary"
        disabled={loading}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  )
}
