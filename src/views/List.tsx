import { useState } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Input from '../components/Input'

export default function List() {
  let [addition, setAddition] = useState('')

  function addToList() {
    // todo
  }
  return (
    <Box>
      <Box display="flex" alignItems="flex-end" mx="2">
        <Input flexGrow="1" value={addition} onChange={setAddition}>
          Add a movie or show:
        </Input>
        <Button ml="2" variant="primary" onClick={addToList}>
          Add
        </Button>
      </Box>
    </Box>
  )
}
