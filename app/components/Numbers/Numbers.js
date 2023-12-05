"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Numbers.module.css";

export default function Numbers() {
  const numbersToDisplay = [
    { number: 43, name: "Members" },
    { number: 25, name: "Events" },
    { number: 4, name: "Years" },
  ];

  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const numbersContainerRef = useRef(null);

  useEffect(() => {
    const duration = 1000;
    const steps = 50;
    const interval = duration / steps;

    if (isCounting && count < numbersToDisplay[0].number) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, interval);

      return () => {
        clearInterval(timer);
      };
    }
  }, [count, isCounting, numbersToDisplay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounting(true);
          }
        });
      },
      { threshold: 0.65 }
    );

    if (numbersContainerRef.current) {
      observer.observe(numbersContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={numbersContainerRef}
      className={`${styles.section} grid-component`}
    >
      <div className={styles.numbersContainer}>
        {numbersToDisplay.map((item) => (
          <div key={item.name} className={styles.numbers}>
            <div className={styles.number}>
              {count <= item.number ? count : item.number}
            </div>
            <div className={styles.name}>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
