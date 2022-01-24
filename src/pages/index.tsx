import Link from '../components/Link'
import {
  Container,
  Title,
  TitleWrap,
  Subhead,
  Actions,
} from '../components/LandingPage'

export default function App() {
  return (
    <Container>
      <TitleWrap>
        <Title>Watch List</Title>
        <Subhead>Your shared to-watch list</Subhead>
      </TitleWrap>
      <Actions>
        <Link href="/signup">Sign-up</Link>
        <Link href="/login">Login</Link>
      </Actions>
    </Container>
  )
}
