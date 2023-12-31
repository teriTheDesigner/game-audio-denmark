import styles from "@/app/components/Slider/Slider.module.css";
import Link from "next/link";
export default function Slider() {
  return (
    <section className={`${styles.section} grid-component`}>
      <div className={styles.headline}>
        <h2>Previous events</h2>
        <p className={styles.text}>
          Over the last 4 years we have organised ... game audio playthroughs
          with AAA game studios and independent game studios. See our previous
          events here.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link
            target="_blank"
            className={styles.link1}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            target="_blank"
            className={styles.link2}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            target="_blank"
            className={styles.link3}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            target="_blank"
            className={styles.link4}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            target="_blank"
            className={styles.link2}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            target="_blank"
            className={styles.link1}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
        </div>
      </div>
      <Link
        className={styles.link}
        href="https://www.meetup.com/game-audio-playthrough/"
      >
        SEE MORE EVENTS →
      </Link>
    </section>
  );
}
