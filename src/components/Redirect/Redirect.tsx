import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Redirect({ to }) {
  let router = useRouter()
  useEffect(() => {
    router.push(to)
  }, [])
  return null
}
