import styles from "@/app/components/UpcomingEvent/UpcomingEvent.module.css";
import Link from "next/link";

export default function UpcomingEvent() {
  return (
    <section className={`grid-section ${styles.pageSection}`}>
      <div className={styles.componentContainer}>
        <div className={styles.component}>
          <div className={styles.textContent}>
            <h2>UPCOMING EVENT</h2>
            <div className={styles.card}>
              <h3 className={styles.title}>Forest Quartet</h3>
              <p className={styles.description}>
                We will kick off the season with the adventure puzzle game “The Forest Quartet”
                presented by the multi-award-winning Mads & Friends Games. Here the talented creator
                Mads Vadsholt will be our forest guide through his very personal family project.
                Mads will tell us about music and sound design in the game, how they intertwine, and
                the aesthetic choices that were made to blend the sound with the visuals. We will
                also hear about the backstory of the game.
              </p>
              <Link
                className={styles.link}
                target="_blank"
                href={"https://www.meetup.com/game-audio-playthrough/"}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
