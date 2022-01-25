import Link from '../components/Link'
import {
  Container,
  Header,
  Home,
  TitleWrap,
  Title,
  Actions,
} from '../components/Page'
import LoginForm from '../views/login'

export default function App() {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Home>Watch List</Home>
        </Link>
      </Header>
      <TitleWrap>
        <Title>Login to Watch List</Title>
        <LoginForm />
        <Actions>
          <p>Don't have an account yet?</p>
          <Link href="/signup">Sign-up</Link>
        </Actions>
      </TitleWrap>
    </Container>
  )
}
