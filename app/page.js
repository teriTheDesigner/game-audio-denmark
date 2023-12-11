import MembershipCard from "./components/MembershipCard/MembershipCard";
import Numbers from "./components/Numbers/Numbers";
import styles from "./page.module.css";
import Slider from "@/app/components/Slider/Slider";
import OurSponsors from "./components/OurSponsors/OurSponsors";
import UpcomingEvent from "./components/UpcomingEvent/UpcomingEvent";
import Mission from "./components/Mission/Mission";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1 className={styles.h1}>GAME AUDIO DENMARK</h1> */}
      <Mission />
      <Numbers />
      <UpcomingEvent />
      <Slider />
      <MembershipCard />
      <OurSponsors />
    </main>
  );
}
