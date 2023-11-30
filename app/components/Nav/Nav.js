"use client";
import styles from "./Nav.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.header}>
      <p>LOGO</p>
      <nav className={styles.nav}>
        <Link href="/events" className={styles.a}>
          EVENTS
        </Link>

        <Link href="/blog" className={styles.a}>
          BLOG
        </Link>

        <Link href="/about" className={styles.a}>
          ABOUT US
        </Link>

        <Link href="/sponsors" className={styles.a}>
          SPONSORS
        </Link>

        <Link href="/bylaws" className={styles.a}>
          BYLAWS
        </Link>
      </nav>
      <button className={styles.burger} onClick={handleToggleMenu}>
        MENU
      </button>
    </header>
  );
}
