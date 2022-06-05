import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/modal.module.css";

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.fullPageWrapper}>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <img className={styles.SEheader} src="/headerlogo.png"></img>
            <a
              className={styles.closeModal}
              href="#"
              onClick={handleCloseClick}
            >
              x
            </a>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
