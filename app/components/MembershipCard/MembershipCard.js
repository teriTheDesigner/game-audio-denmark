import styles from "@/app/components/MembershipCard/MembershipCard.module.css";
export default function MembershipCard() {
  return (
    <div className={styles.card}>
      <p className={styles.title}>STUDENT</p>
      <div>
        <ul className={styles.init4u}>
          <li>What you get as a member</li>
          <li>What you get as a member</li>
          <li>What you get as a member</li>
        </ul>
      </div>
      <p>250 DKK</p>
    </div>
  );
}
