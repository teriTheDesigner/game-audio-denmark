import styles from "@/app/components/SponsorshipCards/SponsorshipCards.module.css";
import Link from "next/link";
export default function SponsorshipCards() {
  return (
    <section className="grid-component">
      <h2 className="h2class">SPONSORSHIP TYPES</h2>
      <div className={styles.sponsorshipCards}>
        <div className={styles.card}>
          <div className={styles.head}>
            <p className={styles.title}>GOLD</p>
            <p>250 DKK</p>
          </div>
          <div>
            <ul className={`${styles.init4u} ${styles.extraPadding}`}>
              <li>
                <svg
                  className={styles.checkIcon1}
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                3 memberships
              </li>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Medium sized logo on website and at workshops
              </li>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Mentioned three times a year on social media
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.head}>
            <p className={styles.title}>PLATINUM</p>
            <p>500 DKK</p>
          </div>
          <div>
            <ul className={styles.init4u}>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                5+ memberships
              </li>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Large sized logo on website and at workshops
              </li>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Mentioned five times a year on social media
              </li>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Write a pitch about how great your company is
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.head}>
            <p className={styles.title}>SILVER</p>
            <p>250 DKK</p>
          </div>
          <div>
            <ul className={`${styles.init4u} ${styles.extraPadding}`}>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Become a supporter
              </li>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                One membership
              </li>
              <li>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ef6975"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Small sized logo on website and at workshops
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link href="#footer" className={styles.link}>
        CONTACT US
      </Link>
    </section>
  );
}
