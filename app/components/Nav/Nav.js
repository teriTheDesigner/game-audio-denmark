"use client";
import styles from "./Nav.module.css";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
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
      <button className={styles.burger} onClick={handleToggleMenu}>
        MENU
      </button>
    </header>
  );
}
