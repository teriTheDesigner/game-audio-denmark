import BoardMembers from "../components/BoardMembers/BoardMembers";
import Faq from "../components/Faq/Faq";
import Mission from "../components/Mission/Mission";
import Video from "../components/Video/Video";
import AboutUs from "../components/AboutUs/AboutUs";
import styles from "@/app/about/styles.module.css";
export default function About() {
  return (
    <main>
      <section className={`${styles.section} grid-component`}>
        <div className={styles.divSection}>
          <h1 className={styles.h1}>
            <span>ABOUT</span> GAME AUDIO DENMARK
          </h1>
        </div>
      </section>
      <Video />
      <Mission />
      <AboutUs />
      <BoardMembers />
      <Faq />
    </main>
  );
}
