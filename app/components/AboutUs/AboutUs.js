import styles from "@/app/components/AboutUs/AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={`${styles.section} grid-component`}>
      <div className={styles.layout}>
        <p className={styles.text}>
          In the first year of Game Audio Denmark, we plan to focus on building
          a strong community of game audio professionals and continue with the
          work that has already been established with our Game Audio Playthrough
          events.
        </p>
        <p className={styles.text}>
          We hope our association will be a useful resource for members,
          providing opportunities to network, share knowledge and experience,
          and collaborate on projects. We will be organizing regular events and
          meetups, both online and offline, to facilitate these interactions and
          foster a sense of community. Some will be free for all and others will
          have a small fee for non-members. We have seen from the 20 previous
          events of Game Audio Playthrough in Copenhagen, that people in our
          industry are eager to attend audio events and socialize with each
          other. It's on that foundation that we want to expand Game Audio
          Playthrough to bigger parts of the country, starting with Aarhus. As
          ourflagship event, it will be free for all.
        </p>
        <p className={styles.text}>
          Game Audio Denmark will also be offering a range of resources and
          tools to help members improve their skills and stay up-to-date with
          the latest industry trends. These resources will include hands-on
          workshops, access to industry experts and mentors, and discounts on
          software and audio tools. In addition to these benefits, we have
          already established close connections with Game Audio in Norway,
          Danish Sound Cluster, Unity, Devgamm, and the newly founded Game Audio
          International Alliance that fosters collaboration between countries.
        </p>
      </div>
    </section>
  );
}
