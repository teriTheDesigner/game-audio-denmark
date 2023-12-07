import styles from "@/app/sponsors/page.module.css";
import SponsorAttractCards from "../components/SponsorAttractCards/SponsorAttractCards";
import SponsorsinitFor from "../components/SponsorsinitFor/SponsorsinitFor";
import SponsorsMoneyFor from "../components/SponsorsMoneyFor/SponsorsMoneyFor";
import SponsorshipCards from "../components/SponsorshipCards/SponsorshipCards";
export default function Sponsors() {
  return (
    <main>
      <section className={`${styles.section} grid-component`}>
        <h1 className={styles.h1}>
          BECOME OUR <span>SPONSOR</span>
        </h1>
      </section>
      <SponsorAttractCards />
      <SponsorsinitFor />
      <SponsorsMoneyFor />
      <SponsorshipCards />
    </main>
  );
}
