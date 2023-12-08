import styles from "@/app/components/SponsorAttractCards/SponsorAttractCards.module.css";
import Link from "next/link";
export default function SponsorAttractCards() {
  return (
    <section className={`${styles.section} grid-section`}>
      <div className={styles.sponsorship}>
        <div className={styles.card}>
          <p className={styles.title}>WHERE ?</p>
          <div>
            <ul className={styles.init4u}>
              <li>
                Our primary communication is conducted online, but we also host
                virtual and non-virtual events.
              </li>
              <li>
                Our in-person events mostly take place in Copenhagen and Aarhus.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.title}>WHAT ?</p>
          <div>
            <ul className={styles.init4u}>
              <li>
                We are a national organization with members from all over
                Denmark.
              </li>
              <li>
                We aim to create a community of learners, teachers, students and
                professionals to help spread their knowledge.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.title}>WHO ?</p>
          <div>
            <ul className={styles.init4u}>
              <li>
                Our membership is open to anyone working with or interested in
                interactive audio.
              </li>
              <li>
                We are run by a volunteer board composed of professionals,
                teachers and talents from across the game audio industry.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link href="/about" className={styles.link}>
        LEARN MORE
      </Link>
    </section>
  );
}
