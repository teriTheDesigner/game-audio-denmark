"use client";

import styles from "./Modal.module.css";

export default function Modal({ onClose }) {
  const handleModalClose = () => {
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={handleModalClose}>
          X
        </button>
        <h2>Thank You for Signing Up!</h2>
        <p>We appreciate your interest. Stay tuned for updates.</p>
      </div>
    </div>
  );
}
