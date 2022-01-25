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
        <Actions>
          <Link href="/signup">Sign-up</Link>
          <Link href="/login">Login</Link>
        </Actions>
      </TitleWrap>
    </Container>
  )
}
