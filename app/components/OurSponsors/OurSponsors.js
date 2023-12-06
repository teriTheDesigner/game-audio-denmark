import styles from "@/app/components/OurSponsors/OurSponsors.module.css";
import Link from "next/link";

export default function OurSponsors() {
  return (
    <section className="grid-component">
      <div className={styles.componentContainer}>
        <div className={styles.component}>
          <h2>OUR SPONSORS</h2>
          <div className={styles.sponsors}>
            <div className={styles.ghostship}></div>
            <div className={styles.sonicminds}></div>
            <div className={styles.cujosound}></div>
          </div>
          <div className={styles.cta}>
            <p>
              We deeply appreciate the support of our sponsors, who play a crucial role in helping
              us achieve our goals. Discover the various opportunities available for sponsorship and
              learn more about how you can contribute to our mission.
            </p>
            <Link href="">CLICK HERE</Link>
          </div>
        </div>
      </div>
    </section>
  );
}