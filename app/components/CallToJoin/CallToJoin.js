import styles from "@/app/components/CallToJoin/CallToJoin.module.css";
import Link from "next/link";

export default function CallToJoin() {
  return (
    <section className={`grid-section ${styles.pageSection}`}>
      <div className={styles.card}>
        <h3 className={styles.title}>INTERESTED</h3>
        <p className={styles.description}>
          Join a community of game audio enthusiasts and expand your network.
        </p>
        <Link
          className={styles.link}
          target="_blank"
          href={"https://www.meetup.com/game-audio-playthrough/"}
        >
          BECOME A MEMBER
        </Link>
      </div>
    </section>
  );
}