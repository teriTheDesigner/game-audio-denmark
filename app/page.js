import MembershipCard from "./components/MembershipCard/MembershipCard";
import Numbers from "./components/Numbers/Numbers";
import SponsorAttractCards from "./components/SponsorAttractCards/SponsorAttractCards";
import SponsorshipCards from "./components/SponsorshipCards/SponsorshipCards";
import styles from "./page.module.css";
import Slider from "@/app/components/Slider/Slider";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1 className={styles.h1}>GAME AUDIO DENMARK</h1> */}
      {/* <Slider />
      <Numbers /> */}
      <MembershipCard />
      <SponsorshipCards />
      <SponsorAttractCards />
    </main>
  );
}
