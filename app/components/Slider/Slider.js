import styles from "@/app/components/Slider/Slider.module.css";
import Link from "next/link";
export default function Slider() {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>PREVIOUS EVENTS</h2>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link
            className={styles.link1}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            className={styles.link2}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            className={styles.link3}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            className={styles.link4}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            className={styles.link2}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
          <Link
            className={styles.link1}
            href="https://www.meetup.com/game-audio-playthrough/"
          ></Link>
        </div>
      </div>
    </section>
  );
}
