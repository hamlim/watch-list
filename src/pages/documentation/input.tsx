import { useState } from 'react'
import Box from '../../components/Box'
import Input from '../../components/Input'
import * as styles from '../../documentation.css'

let types = {
  primary: {},
  disabled: {
    disabled: true,
  },
}

export default function ButtonPage() {
  let [value, setValue] = useState('')
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>System Documentation</h1>
      <h3 className={styles.sectionTitle}>Input:</h3>
      <Box className={styles.container} m="3">
        {Object.keys(types).map((type: string) => (
          <Input key={type} {...types[type]} value={value} onChange={setValue}>
            {type} Input
          </Input>
        ))}
      </Box>
    </div>
  )
}
