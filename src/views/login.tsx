import { useReducer, useState } from 'react'
import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabaseClient'

function reducer(state, action) {
  switch (action.type) {
    case 'loading': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'loaded': {
      return {
        ...state,
        loading: false,
      }
    }
    case 'error': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case 'success': {
      return {
        ...state,
        loading: false,
        success: true,
      }
    }
    case 'reset': {
      return {
        ...state,
        loading: false,
        email: '',
        error: null,
      }
    }
  }
}

export default function LoginForm() {
  let [state, dispatch] = useReducer(reducer, {
    loading: false,
    email: '',
    error: null,
    success: false,
  })
  function setEmail(value) {
    dispatch({
      type: 'type',
      payload: value,
    })
  }

  async function handleSubmit() {
    try {
      dispatch({
        type: 'loading',
      })
      const { error } = await supabase.auth.signIn({ email: state.email })
      if (error) {
        dispatch({
          type: 'error',
          payload: error,
        })
        return
      }
      dispatch({
        type: 'success',
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error,
      })
      return
    }
  }

  return (
    <Box display="flex" alignItems="flex-end" justifyContent="space-around">
      <Input value={state.email} onChange={setEmail}>
        Email:
      </Input>
      <Button variant="primary" disabled={state.loading} onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  )
}
