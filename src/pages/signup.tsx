import Link from '../components/Link'
import {
  Container,
  Actions,
  Header,
  TitleWrap,
  Home,
  Title,
} from '../components/Page'

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
        <Actions>
          <p>Already have an account?</p>
          <Link href="/login">Login</Link>
        </Actions>
      </TitleWrap>
    </Container>
  )
}
