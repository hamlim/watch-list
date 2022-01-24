import Link from '../components/Link'
import * as styles from './index.css'

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Watch List</h1>
        <p className={styles.subhead}>Your shared to-watch list</p>
      </div>
      <div className={styles.actions}>
        <Link href="/signup">Sign-up</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}
