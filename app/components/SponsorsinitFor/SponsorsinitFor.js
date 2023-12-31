import styles from "@/app/components/SponsorsinitFor/SponsorsinitFor.module.css";
export default function SponsorsinitFor() {
  return (
    <section className="grid-component">
      <h2 className="h2class">What's in it for you?</h2>
      <div className={styles.sponsorship}>
        <div className={styles.card}>
          <p className={styles.number}>01</p>
          <p className={styles.title}>Brand Visibility</p>

          <div className={styles.init4u}>
            <div>
              <p>
                Get your name and logo front and center on our website and
                events, and create awareness for your business.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>02</p>
          <p className={styles.title}>Member Outreach</p>

          <div className={styles.init4u}>
            <div>
              <p>
                Hiring? We can help you spot candidates among members and
                connect them with you, helping you find perfect candidates for
                job openings.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>03</p>
          <p className={styles.title}>Gain Knowledge</p>

          <div className={styles.init4u}>
            <div>
              <p>
                With the board on speed dial, you can quickly gauge who knows
                what in the audio industry, or we can guide you to helpful
                resources.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>04</p>
          <p className={styles.title}>Memberships</p>

          <div className={styles.init4u}>
            <div>
              <p>
                Depending on your sponsor- ship tier, you are granted a limited
                amount of member- ships for your employees.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>05</p>
          <p className={styles.title}>Service Highlight</p>

          <div className={styles.init4u}>
            <div>
              <p>
                Depending on your sponsoring tier, we'll promote your products
                and/or services. Write a pitch and we'll shout it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
