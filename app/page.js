import MembershipCard from "./components/MembershipCard/MembershipCard";
import Numbers from "./components/Numbers/Numbers";
import styles from "./page.module.css";
import Slider from "@/app/components/Slider/Slider";
import OurSponsors from "./components/OurSponsors/OurSponsors";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1 className={styles.h1}>GAME AUDIO DENMARK</h1> */}

      <MembershipCard />
      <OurSponsors />
      <Numbers />
      <Slider />
    </main>
  );
}
