import styles from "./Bylaws.module.css";
export default function Bylaws() {
  return (
    <div className={styles.page}>
      <section className={`${styles.section} grid-section`}>
        <h1 className={styles.h1}>
          RULES AND <span>REGULATIONS</span>
        </h1>
      </section>
      <section className={`${styles.section} grid-section`}>
        <div className={styles.divSection}>
          <div className={styles.contentcenter}>
            <h4 className={styles.h4}>Mission</h4>
            <p className={styles.p}>
              Game Audio Denmark is dedicated to establishing a national network
              for the game audio industry with interconnected local networks.
              Our mission is to be an active and visible organization providing
              education, advocacy, and resources to our members.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.section} grid-section`}>
        <div className={styles.divSection}>
          <div className={styles.contentright}>
            <h4 className={styles.h4}>Objectives</h4>
            <ul className={styles.ul}>
              <li>Build a strong community of game audio professionals.</li>
              <li>
                Provide opportunities for networking, knowledge sharing, and
                collaboration.
              </li>
              <li>
                Organize regular events and meetups, both online and offline.
              </li>
              <li>
                Offer resources, tools, and workshops to help members improve
                their skills.
              </li>
              <li>
                Foster collaboration with industry experts, mentors, and related
                organizations.
              </li>
              <li>
                Explore the possibility of creating a job board or networking
                platform.
              </li>
              <li>
                Host sound design challenges, crowdsourced field recording
                projects, and game audio conferences.
              </li>
              <li>
                Create a thriving community of game audio enthusiasts in
                Denmark.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.section} grid-section`}>
        <div className={styles.divSection}>
          <div className={styles.contentright}>
            <h4 className={styles.h4}>Year One Goals</h4>
            <p>During the first year, Game Audio Denmark aims to:</p>
            <ul className={styles.ul}>
              <li>
                Organize 7-10 Game Audio Playthrough events in Copenhagen and
                2-5 events in Aarhus with more cities to follow.
              </li>
              <li>
                Host 2-5 hands-on workshops on specialized game audio topics.
              </li>
              <li>Launch a mentorship program.</li>
              <li>Host several webinars throughout the year.</li>
              <li>
                Launch a newsletter featuring updates on events, member
                spotlights, and resources.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.section} grid-section`}>
        <div className={styles.divSection}>
          <div className={styles.contentcenter}>
            <h4 className={styles.h4}>Future Plans</h4>
            <p>Looking beyond year one, Game Audio Denmark plans to explore:</p>
            <ul className={styles.ul}>
              <li>Creating a job board or networking platform.</li>
              <li>
                Hosting sound design challenges and crowdsourced field recording
                projects.
              </li>
              <li>Planning a 1-2 day game audio conference.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.section} grid-section`}>
        <div className={styles.divSection}>
          <div className={styles.contentcenter}>
            <h4 className={styles.h4}>Membership rules</h4>

            <ul className={styles.ul}>
              <li>
                Membership is open to individuals who share an interest in game
                audio and support the objectives of Game Audio Denmark.
              </li>
              <li>
                All members must adhere to the organization's mission, vision,
                and ethical standards.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.section} grid-section`}>
        <div className={styles.divSection}>
          <div className={styles.contentcenter}>
            <h4 className={styles.h4}>Rights and Responsibilities</h4>

            <ul className={styles.ul}>
              <li>
                General Members and Student/Graduate Members have the right to
                vote and can be elected as board members.
              </li>
              <li>
                All members are expected to actively contribute to the
                community, participate in events, and uphold the values of Game
                Audio Denmark.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.section} grid-section`}>
        <div className={styles.divSection}>
          <div className={styles.contentright}>
            <h4 className={styles.h4}>Code of Conduct</h4>

            <ul className={styles.ul}>
              <li>
                Members shall conduct themselves in a professional manner at all
                Game Audio Denmark events and activities.
              </li>
              <li>
                Respectful communication and behavior are expected towards
                fellow members, guests, and speakers.
              </li>
              <li>
                Game Audio Denmark is committed to creating an inclusive
                environment that respects diversity. Discrimination or
                harassment based on race, gender, age, disability, sexual
                orientation, or any other characteristic is strictly prohibited.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
