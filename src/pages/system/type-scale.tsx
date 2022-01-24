import Box from '../../components/Box'
import * as styles from '../../system.css'

export default function ButtonPage() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>System Documentation</h1>
      <h3 className={styles.sectionTitle}>Button:</h3>
      <Box display="flex" flexDirection="column" m="3">
        <Box fontSize="0">vars.fontSizes[0]</Box>
        <Box fontSize="1">vars.fontSizes[1]</Box>
        <Box fontSize="2">vars.fontSizes[2]</Box>
        <Box fontSize="3">vars.fontSizes[3]</Box>
        <Box fontSize="4">vars.fontSizes[4]</Box>
        <Box fontSize="h1">vars.fontSizes.h1</Box>
        <Box fontSize="h2">vars.fontSizes.h2</Box>
        <Box fontSize="h3">vars.fontSizes.h4</Box>
        <Box fontSize="h4">vars.fontSizes.h4</Box>
        <Box fontSize="h5">vars.fontSizes.h5</Box>
        <Box fontSize="h6">vars.fontSizes.h6</Box>
      </Box>
    </div>
  )
}
