import styles from "./page.module.css";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>GAME AUDIO DENMARK</h1>
      <Slider />
    </main>
  );
}
