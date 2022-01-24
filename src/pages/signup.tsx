import Link from '../components/Link'
import * as styles from './signup.css'

export default function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h3>Watch List</h3>
        </Link>
      </header>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Sign-up to Watch List</h1>
      </div>
      <div className={styles.actions}>
        <p>Already have an account?</p>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}
