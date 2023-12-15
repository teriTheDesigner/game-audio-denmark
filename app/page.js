import Numbers from "./components/Numbers/Numbers";
import styles from "./page.module.css";
import Slider from "@/app/components/Slider/Slider";
import OurSponsors from "./components/OurSponsors/OurSponsors";
import UpcomingEvent from "./components/UpcomingEvent/UpcomingEvent";
import Link from "next/link";
import NewMembershipCards from "./components/NewMembershipCards/NewMembershipCards";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="grid-component">
        <h1 className={styles.h1}>
          GAME <span>AUDIO</span> DENMARK
        </h1>
        <div className={styles.gadDescription}>
          <p>
            “Game Audio Denmark is dedicated to establishing a national network
            for the game audio industry with interconnected local networks. Our
            mission is to be an active and visible organization providing
            education, advocacy, and resources to our members.”
          </p>

          <Link className={styles.link} href="/about">
            LEARN MORE →
          </Link>
        </div>
      </section>
      {/* <h1 className={styles.h1}>GAME AUDIO DENMARK</h1> */}
      <Numbers />
      <UpcomingEvent />
      <Slider />
      <NewMembershipCards />
      <OurSponsors />
    </main>
  );
}
