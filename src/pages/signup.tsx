import ErrorBoundary from '../components/ErrorBoundary'
import Link from '../components/Link'
import Box from '../components/Box'
import {
  Container,
  Actions,
  Header,
  TitleWrap,
  Home,
  Title,
} from '../components/Page'
import SignupForm from '../views/SignupForm'

export default function Signup() {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Home>Watch List</Home>
        </Link>
      </Header>
      <TitleWrap>
        <Title>Sign-up to Watch List</Title>
        <ErrorBoundary props={{ my: '10' }}>
          <SignupForm />
        </ErrorBoundary>
        <Actions>
          <p>Already have an account?</p>
          <Link href="/login">Login</Link>
        </Actions>
      </TitleWrap>
    </Container>
  )
}
