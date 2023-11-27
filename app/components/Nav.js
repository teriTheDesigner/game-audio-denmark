import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header}>
      <p>LOGO</p>
      <nav className={styles.nav}>
        <a href="/events" className={styles.a}>
          EVENTS
        </a>

        <a href="/blog" className={styles.a}>
          BLOG
        </a>

        <a href="/about" className={styles.a}>
          ABOUT US
        </a>

        <a href="/sponsors" className={styles.a}>
          SPONSORS
        </a>

        <a href="/bylaws" className={styles.a}>
          BYLAWS
        </a>
      </nav>
    </header>
  );
}
