import { useState } from 'react'
import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabaseClient'
import useErrorBoundary from '../lib/useErrorBoundary'
import { useUser } from '../lib/userContext'
import { useRouter } from 'next/router'

export default function SignupForm() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [verifiedPassword, setVerifiedPassword] = useState('')
  let [loading, setLoading] = useState(false)
  let trigger = useErrorBoundary()
  let [, setUser] = useUser()
  let router = useRouter()

  async function handleSubmit() {
    try {
      setLoading(true)
      if (password !== verifiedPassword) {
        throw new Error(`Passwords don't match!`)
      }
      const { error, user } = await supabase.auth.signUp({ email, password })
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
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="content"
      mt="10"
      p="4"
      is="form"
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
      <Input
        width="100%"
        value={verifiedPassword}
        onChange={setVerifiedPassword}
        inputProps={{ type: 'password', autoComplete: 'new-password' }}
        mt="4"
      >
        Verify Password:
      </Input>
      <Button
        mt="4"
        width="100%"
        variant="primary"
        disabled={loading}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  )
}
