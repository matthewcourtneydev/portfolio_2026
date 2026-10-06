import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav
          className={styles.socials}
          aria-label="Social links"
        >
          <a
            href="https://github.com/matthewcourtneydev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <p className={styles.credit}>
          Designed &amp; built by Matt Courtney
        </p>
      </div>
    </footer>
  )
}