import * as styles from './Page.css'

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

export function Header({ children }) {
  return <header className={styles.header}>{children}</header>
}

export function Home({ children }) {
  return <h3>{children}</h3>
}
