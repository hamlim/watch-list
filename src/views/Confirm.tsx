import { Box, Link } from '../components'

export default function ConfirmView() {
  return (
    <Box
      m="4"
      minHeight="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      <Box mb="4" is="h2" fontSize="2">
        Check your email to confirm your account!
      </Box>
      <Box is="p">
        Once you've confirmed your account you can go{' '}
        <Link href="/login">Login</Link>!
      </Box>
    </Box>
  )
}
