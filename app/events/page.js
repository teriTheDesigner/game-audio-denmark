"use client";

import Slider from "../components/Slider/Slider";
import UpcomingEvent from "../components/UpcomingEvent/UpcomingEvent";
import styles from "@/app/events/styles.module.css";
export default function Events() {
  return (
    <main>
      <UpcomingEvent />
      <section className={`${styles.section} grid-component`}>
        <h2>A glimpse into game audio industry - from the experts. </h2>
        <p className={styles.text}>
          The meetups are both for members and non-members alike, it's free to
          participate and no sign up is needed. We're having these events to
          strengthen our community as well as welcoming everyone who is
          interested in game audio. You don't have to be a professional or know
          anything about audio to join - as long as you are interested, we'd
          love for you to join us!
        </p>
      </section>
      <Slider />
    </main>
  );
}
