import styles from "@/app/components/Video/Video.module.css";

export default function Video() {
  return (
    <section className={`${styles.section} grid-component`}>
      <div className={styles.layout}>
        <iframe
          className={styles.video}
          title="Game Audio Denmark Introduction Video"
          src="https://www.youtube.com/embed/yZaN5TUUhx4?autoplay=1&mute=1"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
