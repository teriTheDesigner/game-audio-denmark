import styles from "@/app/components/SponsorshipCards/SponsorshipCards.module.css";
export default function SponsorshipCards() {
  return (
    <section className="grid-component">
      <div className={styles.sponsorshipCards}>
        <div className={styles.card}>
          <div className={styles.head}>
            <p className={styles.title}>GOLD</p>
            <p>250 DKK</p>
          </div>
          <div>
            <ul className={`${styles.init4u} ${styles.extraPadding}`}>
              <li>3 memberships</li>
              <li>Medium sized logo on website and at workshops</li>
              <li>Mentioned three times a year on social media</li>
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
              <li>5+ memberships</li>
              <li>Large sized logo on website and at workshops</li>
              <li>Mentioned five times a year on social media</li>
              <li>Write a pitch about how great your company is</li>
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
              <li>Become a supporter</li>
              <li>One membership</li>
              <li>Small sized logo on website and at workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
