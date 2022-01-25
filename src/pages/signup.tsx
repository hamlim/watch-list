import Link from '../components/Link'
import {
  Container,
  Actions,
  Header,
  TitleWrap,
  Home,
  Title,
} from '../components/Page'
import SignupForm from '../views/signup'

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
        <SignupForm />
        <Actions>
          <p>Already have an account?</p>
          <Link href="/login">Login</Link>
        </Actions>
      </TitleWrap>
    </Container>
  )
}
