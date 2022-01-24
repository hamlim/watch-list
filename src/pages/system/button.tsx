import Box from '../../components/Box'
import * as styles from '../../system.css'
import Button from '../../components/Button'

let types = {
  primary: {
    variant: 'primary',
  },
  secondary: {
    variant: 'secondary',
  },
  ghost: {
    variant: 'ghost',
  },
  text: {
    variant: 'text',
  },
  disabled: {
    disabled: true,
  },
  disabledSecondary: {
    disabled: true,
    variant: 'secondary',
  },
  disabledGhost: {
    disabled: true,
    variant: 'ghost',
  },
  disabledText: {
    disabled: true,
    variant: 'text',
  },
}

export default function ButtonPage() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>System Documentation</h1>
      <h3 className={styles.sectionTitle}>Button:</h3>
      <Box className={styles.container} m="3">
        {Object.keys(types).map((type: string) => (
          <Button key={type} {...types[type]}>
            {type} Button
          </Button>
        ))}
      </Box>
    </div>
  )
}
