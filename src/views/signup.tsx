import { useState } from 'react'
import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabaseClient'

export default function SignupForm() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [loading, setLoading] = useState(false)

  async function handleSubmit() {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        throw error
      }
      setLoading(false)
    } catch (error) {
      throw error
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
    >
      <Input width="100%" value={email} onChange={setEmail}>
        Email:
      </Input>
      <Input
        width="100%"
        value={password}
        onChange={setPassword}
        inputProps={{ type: 'password' }}
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
        Sign Up
      </Button>
    </Box>
  )
}
