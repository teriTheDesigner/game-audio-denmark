import styles from "@/app/components/SponsorsMoneyFor/SponsorsMoneyFor.module.css";
export default function SponsorsMoneyFor() {
  return (
    <section className={`${styles.section} grid-component`}>
      <div className={styles.componentContainer}>
        <div className={styles.component}>
          <ul className={styles.advantages}>
            <li>
              <p>71% Activities:</p>
              <p>Workshops, webinars & talks</p>
            </li>
            <li>
              <p>15% Administration:</p>
              <p>Website, software & subscriptions</p>
            </li>
            <li>
              <p>7% Bank & Finance:</p>
              <p>Bank Account, Mobile Pay & accounting</p>
            </li>
            <li>
              <p>7% Accomodations:</p>
              <p>Hotel & travel</p>
            </li>
          </ul>
          <div className={styles.stats}></div>
        </div>
      </div>
    </section>
  );
}
