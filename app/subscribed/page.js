import styles from "@/app/subscribed/page.module.css";
import Link from "next/link";
export default function Subscribed() {
  return (
    <main>
      <section className="grid-component">
        <div className={styles.componentContainer}>
          <div className={styles.component}>
            <div className={styles.pageTitle}>
              <h1>WELCOME</h1>
              <p className={styles.midTitle}>TO THE</p>
              <p className={styles.endTitle}>CLUB</p>
            </div>
            <div className={styles.cta}>
              <div className={styles.pageText}>
                <p>We are happy you are joining our community! </p>
                <p>Read more about us here </p>
              </div>
              <Link className={styles.link} href={"/"}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
