"use client";

import { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}></Link>
        <nav className={styles.nav}>
          <Link href="/events" className={styles.a}>
            EVENTS
          </Link>

          <Link href="/blog" className={styles.a}>
            BLOG
          </Link>

          <Link href="/about" className={styles.a}>
            ABOUT
          </Link>
          <Link href="/sponsors" className={styles.a}>
            SPONSORS
          </Link>
          <Link href="/bylaws" className={styles.a}>
            BYLAWS
          </Link>
          <Link className={styles.link} href="/signup">
            SIGN UP
          </Link>
        </nav>
      </header>
      <div className={styles.burgermenu}>
        <div
          className={`${styles.container} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={handleToggleMenu}
        >
          <div className={`${styles.menulogo} ${styles.line1}`}></div>
          <div className={`${styles.menulogo} ${styles.line2}`}></div>
          <div className={`${styles.menulogo} ${styles.line3}`}></div>
        </div>
        {isMenuOpen && (
          <div className={`${styles.menu} ${styles.showmenu}`}>
            <ul>
              <li>
                <Link href="/events">EVENTS</Link>
              </li>
              <li>
                <Link href="/blog">BLOG</Link>
              </li>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="/sponsors">SPONSORS</Link>
              </li>
              <li>
                <Link href="/bylaws">BYLAWS</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
