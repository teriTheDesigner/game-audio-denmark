import styles from "@/app/components/BoardMembers/BoardMembers.module.css";
import Link from "next/link";

export default function BoardMembers() {
  return (
    <section className={`${styles.section} grid-component`}>
      <div className={styles.layout}>
        <h2>THE BOARD</h2>
        <div className={styles.boardMembers1}>
          <div className={styles.onePerson}>
            <div className={styles.image9}></div>
            <p>Daniel Nielsen</p>
          </div>
          <div className={styles.onePerson}>
            <div className={styles.image8}></div>
            <p>Thea Hundebøl</p>
          </div>
          <div className={styles.onePerson}>
            <div className={styles.image7}></div>
            <p>Frederik Max</p>
          </div>
          <div className={styles.onePerson}>
            <div className={styles.image6}></div>
            <p>Camilla Angelbo</p>
          </div>
          <div className={styles.onePerson}>
            <div className={styles.image5}></div>
            <p> Mads Martinussen</p>
          </div>
        </div>
        <div className={styles.boardMembers2}>
          <div className={styles.onePerson}>
            <div className={styles.image4}></div>
            <p>Rune R. B. Eskildsen</p>
          </div>
          <div className={styles.onePerson}>
            <div className={styles.image3}></div>
            <p>Ronni S. Mikkelsen</p>
          </div>
          <div className={styles.onePerson}>
            <div className={styles.image2}></div>
            <p>Morten Bach </p>
          </div>
          <div className={styles.onePerson}>
            <div className={styles.image1}></div>
            <p>Kristian Rømer</p>
          </div>
        </div>
        <Link href="/" className={styles.link}>
          JOIN US
        </Link>
      </div>
    </section>
  );
}
