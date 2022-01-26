import { createContext, useContext, useState } from 'react'

let userContext = createContext<
  [
    {
      id: string
    },
    (user: {}) => void,
  ]
>([null, () => {}])

export function Provider({ children }) {
  let ctx = useState(null)
  return <userContext.Provider value={ctx}>{children}</userContext.Provider>
}

export function useUser() {
  return useContext(userContext)
}
