import BoardMembers from "../components/BoardMembers/BoardMembers";
import Faq from "../components/Faq/Faq";
import Video from "../components/Video/Video";
import AboutUs from "../components/AboutUs/AboutUs";
import styles from "@/app/about/styles.module.css";
import Numbers from "../components/Numbers/Numbers";
import CallToJoin from "../components/CallToJoin/CallToJoin";
export default function About() {
  return (
    <main>
      <section className={`${styles.section} grid-component`}>
        <h1 className={styles.h1}>
          <span>ABOUT</span> GAME AUDIO DENMARK
        </h1>
        <div className={styles.gadDescription}>
          <p>
            “Our mission is to establish a national network for the game audio industry with local
            networks that are interconnected nationally. We are committed to being an active and
            visible organization that provides education, advocacy, and resources to our members.”
          </p>
        </div>
      </section>
      <Video />
      <AboutUs />
      <Numbers />
      <section className={`${styles.lookingAhead} grid-section`}>
        <div>
          <h2>Looking ahead</h2>

          <p>
            We hope our association will be a useful resource for members, providing opportunities
            to network, share knowledge and experience, and collaborate on projects. We will be
            organizing regular events and meetups, both online and offline, to facilitate these
            interactions and foster a sense of community. Some will be free for all and others will
            have a small fee for non-members. We have seen from the 20 previous events of Game Audio
            Playthrough in Copenhagen, that people in our industry are eager to attend audio events
            and socialize with each other. It's on that foundation that we want to expand Game Audio
            Playthrough to bigger parts of the country, starting with Aarhus. As ourflagship event,
            it will be free for all.
          </p>
        </div>
      </section>
      <BoardMembers />
      <CallToJoin />
      <Faq />
    </main>
  );
}
