import { useState } from 'react'

export default function useErrorBoundary() {
  let [, setError] = useState()
  return (err: Error) =>
    setError(() => {
      throw err
    })
}
