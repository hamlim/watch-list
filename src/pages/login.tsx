import Link from '../components/Link'
import {
  Container,
  Header,
  Home,
  TitleWrap,
  Title,
  Actions,
} from '../components/Page'

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
      </TitleWrap>
      <Actions>
        <p>Don't have an account yet?</p>
        <Link href="/signup">Sign-up</Link>
      </Actions>
    </Container>
  )
}
