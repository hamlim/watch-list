import Link from '../components/Link'
import * as styles from './login.css'

export default function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h3>Watch List</h3>
        </Link>
      </header>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Login to Watch List</h1>
      </div>
      <div className={styles.actions}>
        <p>Don't have an account yet?</p>
        <Link href="/signup">Sign-up</Link>
      </div>
    </div>
  )
}
