import styles from "@/app/components/MembershipCard/MembershipCard.module.css";
export default function MembershipCard() {
  return (
    <section className="grid-component">
      <div className={styles.membership}>
        <div className={styles.card}>
          <p className={styles.title}>STUDENT</p>
          <div>
            <ul className={styles.init4u}>
              <li>Discounted membership price</li>
              <li>Can vote</li>
              <li>Be a board member</li>
            </ul>
          </div>
          <p>250 DKK</p>
        </div>
        <div className={styles.card}>
          <p className={styles.title}>GENERAL</p>
          <div>
            <ul className={styles.init4u}>
              <li>Full member price</li>
              <li>Can vote</li>
              <li>Be a board member</li>
            </ul>
          </div>
          <p>500 DKK</p>
        </div>
        <div className={styles.card}>
          <p className={styles.title}>SUPPORTER</p>
          <div>
            <ul className={styles.init4u}>
              <li>Become a supporter</li>
              <li>What you get as a member</li>
              <li>What you get as a member</li>
            </ul>
          </div>
          <p>250 DKK</p>
        </div>
      </div>
    </section>
  );
}
