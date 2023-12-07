import MembershipCard from "./components/MembershipCard/MembershipCard";
import Numbers from "./components/Numbers/Numbers";
import SponsorAttractCards from "./components/SponsorAttractCards/SponsorAttractCards";
import SponsorshipCards from "./components/SponsorshipCards/SponsorshipCards";
import styles from "./page.module.css";
import Slider from "@/app/components/Slider/Slider";
import OurSponsors from "./components/OurSponsors/OurSponsors";
import SponsorsinitFor from "./components/SponsorsinitFor/SponsorsinitFor";
import SponsorsMoneyFor from "./components/SponsorsMoneyFor/SponsorsMoneyFor";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1 className={styles.h1}>GAME AUDIO DENMARK</h1> */}

      <Numbers />
      <MembershipCard />
      <OurSponsors />
      <Slider />
      <SponsorsinitFor />
      <SponsorsMoneyFor />
      <SponsorAttractCards />
      <SponsorshipCards />
    </main>
  );
}
