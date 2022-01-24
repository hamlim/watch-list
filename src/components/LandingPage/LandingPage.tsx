import * as styles from './LandingPage.css'

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}

export function TitleWrap({ children }) {
  return <div className={styles.titleWrap}>{children}</div>
}

export function Subhead({ children }) {
  return <p className={styles.subhead}>{children}</p>
}

export function Actions({ children }) {
  return <div className={styles.actions}>{children}</div>
}

export function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>
}
