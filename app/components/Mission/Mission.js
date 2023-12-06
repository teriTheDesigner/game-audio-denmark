import styles from "@/app/components/Mission/Mission.module.css";

export default function Mission() {
  return (
    <section className={`${styles.section} grid-component`}>
      <div className={styles.layout}>
        <h2>OUR MISSION</h2>
        <p className={styles.text}>
          " Game Audio Denmark is dedicated to establishing a national network
          for the game audio industry with interconnected local networks. Our
          mission is to be an active and visible organization providing
          education, advocacy, and resources to our members. "
        </p>
      </div>
    </section>
  );
}
