"use client";

import { useState, useEffect } from "react";
import styles from "./Numbers.module.css";

export default function Numbers() {
  const numbersToDisplay = [
    { number: 43, name: "Members" },
    { number: 25, name: "Events" },
    { number: 4, name: "Years" },
  ];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 50;
    const interval = duration / steps;

    if (count < numbersToDisplay[0].number) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, interval);

      return () => {
        clearInterval(timer);
      };
    }
  }, [count, numbersToDisplay]);

  return (
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
  );
}
